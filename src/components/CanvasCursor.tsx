
import React, { useEffect } from "react";

// CanvasCursor draws an animated trailing cursor line using a canvas overlay
const CanvasCursor: React.FC = () => {
  useEffect(() => {
    // == Helper classes/functions adapted from user code ==
    let ctx: CanvasRenderingContext2D & { running?: boolean; frame?: number };
    let f: any;
    let e = 0;
    let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let lines: any[] = [];
    const E = {
      debug: false,
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98,
    };

    function n(this: any, opts: any) {
      this.init(opts || {});
    }
    n.prototype = {
      init: function (opts: any) {
        this.phase = opts.phase || 0;
        this.offset = opts.offset || 0;
        this.frequency = opts.frequency || 0.001;
        this.amplitude = opts.amplitude || 1;
      },
      update: function () {
        this.phase += this.frequency;
        // Note: e is shadowed here but not used with .value() anywhere
        return this.offset + Math.sin(this.phase) * this.amplitude;
      },
      value: function () {
        return this.offset + Math.sin(this.phase) * this.amplitude;
      },
    };

    function Node(this: any) {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
    }

    function Line(this: any, opts: any) {
      this.init(opts || {});
    }
    Line.prototype = {
      init: function (opts: any) {
        this.spring = opts.spring + 0.1 * Math.random() - 0.02;
        this.friction = E.friction + 0.01 * Math.random() - 0.002;
        this.nodes = [];
        for (let i = 0; i < E.size; i++) {
          const t = new (Node as any)();
          t.x = pos.x;
          t.y = pos.y;
          this.nodes.push(t);
        }
      },
      update: function () {
        let e = this.spring;
        let t = this.nodes[0];
        t.vx += (pos.x - t.x) * e;
        t.vy += (pos.y - t.y) * e;
        for (let i = 0, a = this.nodes.length; i < a; i++) {
          t = this.nodes[i];
          if (i > 0) {
            let n = this.nodes[i - 1];
            t.vx += (n.x - t.x) * e;
            t.vy += (n.y - t.y) * e;
            t.vx += n.vx * E.dampening;
            t.vy += n.vy * E.dampening;
          }
          t.vx *= this.friction;
          t.vy *= this.friction;
          t.x += t.vx;
          t.y += t.vy;
          e *= E.tension;
        }
      },
      draw: function () {
        let n = this.nodes[0].x,
          i = this.nodes[0].y;
        ctx.beginPath();
        ctx.moveTo(n, i);
        for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
          const e = this.nodes[a];
          const t = this.nodes[a + 1];
          n = 0.5 * (e.x + t.x);
          i = 0.5 * (e.y + t.y);
          ctx.quadraticCurveTo(e.x, e.y, n, i);
        }
        const e = this.nodes[this.nodes.length - 2];
        const t = this.nodes[this.nodes.length - 1];
        ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
        ctx.stroke();
        ctx.closePath();
      },
    };

    function onMousemove(e: MouseEvent | TouchEvent) {
      function o() {
        lines = [];
        for (let i = 0; i < E.trails; i++) {
          lines.push(
            new (Line as any)({
              spring: 0.4 + (i / E.trails) * 0.025,
            })
          );
        }
      }
      function c(ev: any) {
        if (ev.touches) {
          pos.x = ev.touches[0].pageX;
          pos.y = ev.touches[0].pageY;
        } else {
          pos.x = ev.clientX;
          pos.y = ev.clientY;
        }
        ev.preventDefault?.();
      }
      function l(ev: any) {
        if (ev.touches && ev.touches.length === 1) {
          pos.x = ev.touches[0].pageX;
          pos.y = ev.touches[0].pageY;
        }
      }
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
      document.addEventListener("mousemove", c, { passive: false });
      document.addEventListener("touchmove", c, { passive: false });
      document.addEventListener("touchstart", l, { passive: false });
      c(e);
      o();
      render();
    }

    function render() {
      if (ctx.running) {
        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalCompositeOperation = "lighter";
        ctx.strokeStyle = `hsla(${Math.round(f.update())},50%,50%,0.2)`;
        ctx.lineWidth = 1;
        for (let i = 0; i < E.trails; i++) {
          lines[i].update();
          lines[i].draw();
        }
        ctx.frame && ctx.frame++;
        window.requestAnimationFrame(render);
      }
    }

    function resizeCanvas() {
      const canvas = document.getElementById("canvas-cursor-canvas") as HTMLCanvasElement;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function renderCanvas() {
      const canvas = document.getElementById("canvas-cursor-canvas") as HTMLCanvasElement;
      if (!canvas) return;
      ctx = canvas.getContext("2d") as typeof ctx;
      ctx.running = true;
      ctx.frame = 1;
      f = new (n as any)({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
      });
      document.addEventListener("mousemove", onMousemove, { passive: false });
      document.addEventListener("touchstart", onMousemove, { passive: false });
      document.body.addEventListener("orientationchange", resizeCanvas);
      window.addEventListener("resize", resizeCanvas);
      window.addEventListener("focus", () => {
        if (ctx && !ctx.running) {
          ctx.running = true;
          render();
        }
      });
      window.addEventListener("blur", () => {
        ctx && (ctx.running = false);
      });
      resizeCanvas();
    }

    renderCanvas();
    return () => {
      if (ctx) ctx.running = false;
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
      document.body.removeEventListener("orientationchange", resizeCanvas);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("focus", () => {
        if (ctx && !ctx.running) {
          ctx.running = true;
          render();
        }
      });
      window.removeEventListener("blur", () => {
        ctx && (ctx.running = false);
      });
    };
  }, []);

  // The `pointer-events-none` style lets mouse events pass through the canvas overlay.
  return (
    <canvas
      id="canvas-cursor-canvas"
      className="fixed z-[9999] top-0 left-0 w-full h-full pointer-events-none"
      style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh" }}
      tabIndex={-1}
      aria-hidden="true"
    ></canvas>
  );
};

export default CanvasCursor;
