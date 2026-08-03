// Canvas frame-sequence scrubber — the "Apple AirPods" scroll effect.
//
// Loading model (important for perceived performance):
//   1. showPoster()  → draws an 84KB still instantly, so the watch is visible
//                      with NO blocking wait and the page can reveal immediately.
//   2. loadFrames()  → downloads the full manifest of frames in the background;
//                      once ready, render() scrubs through them.
// If the manifest is missing, the poster simply stays (graceful fallback).

export class FrameSequence {
  constructor(canvas, { base, poster, maxDpr = 2 } = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { alpha: false });
    this.base = base;
    this.poster = poster;
    this.maxDpr = maxDpr;
    this.images = [];
    this.posterImg = null;
    this.count = 0;
    this.current = -1;
    this.ready = false;
    this._resizeBound = false;
    this._onResize = this.resize.bind(this);
  }

  _name(i) {
    return `frame_${String(i).padStart(4, '0')}.jpg`;
  }

  _loadImage(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = url;
    });
  }

  _ensureResize() {
    if (this._resizeBound) return;
    window.addEventListener('resize', this._onResize, { passive: true });
    this._resizeBound = true;
  }

  // Draw the poster still immediately — no network wait beyond one small image.
  async showPoster() {
    if (this.poster) this.posterImg = await this._loadImage(this.poster);
    this._ensureResize();
    this.resize();
    return this;
  }

  // Download every frame in the background; enables scrubbing when done.
  async loadFrames(onProgress) {
    let manifest = null;
    try {
      const res = await fetch(`${this.base}/manifest.json`, { cache: 'force-cache' });
      if (res.ok) manifest = await res.json();
    } catch {
      /* keep poster */
    }
    if (!manifest || !manifest.count) return this;

    const urls = [];
    for (let i = 1; i <= manifest.count; i++) urls.push(`${this.base}/${this._name(i)}`);
    await this._preload(urls, onProgress);

    if (!this.images.some(Boolean)) return this; // all failed → keep poster
    this.count = manifest.count;
    this.ready = true;
    this._ensureResize();
    this.resize();
    return this;
  }

  // Convenience: poster first, then frames (used by below-the-fold sections).
  async load(onProgress) {
    await this.showPoster();
    return this.loadFrames(onProgress);
  }

  async _preload(urls, onProgress) {
    this.images = new Array(urls.length);
    let done = 0;
    let idx = 0;
    const CONCURRENCY = 6;
    const worker = async () => {
      while (idx < urls.length) {
        const i = idx++;
        this.images[i] = await this._loadImage(urls[i]);
        done += 1;
        onProgress?.(done / urls.length);
      }
    };
    await Promise.all(
      Array.from({ length: Math.min(CONCURRENCY, urls.length) }, worker),
    );
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, this.maxDpr);
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    if (!w || !h) return;
    this.canvas.width = Math.round(w * dpr);
    this.canvas.height = Math.round(h * dpr);
    if (this.ready && this.current >= 0) this._draw(this.current);
    else if (this.ready) this._draw(0);
    else this._drawImage(this.posterImg);
  }

  render(index) {
    if (!this.ready) return; // still on poster
    const i = Math.max(0, Math.min(this.count - 1, index | 0));
    if (i === this.current) return;
    this.current = i;
    this._draw(i);
  }

  _draw(i) {
    this._drawImage(this.images[i] || this.images.find(Boolean) || this.posterImg);
  }

  _drawImage(img) {
    if (!img) return;
    const { ctx, canvas } = this;
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    if (!iw || !ih) return;
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.fillStyle = '#030303';
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  }
}
