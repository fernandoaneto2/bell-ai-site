"use client";

import { useEffect, useRef } from "react";

type P = {
  x: number; y: number; r: number;
  vx: number; vy: number; o: number; od: number;
};

export default function BackgroundFX() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const pts: P[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * (W || 1440),
      y: Math.random() * (H || 900),
      r: Math.random() * 1.1 + 0.3,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -(Math.random() * 0.22 + 0.05),
      o: Math.random() * 0.4 + 0.08,
      od: (Math.random() > 0.5 ? 1 : -1) * 0.004,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,162,76,${p.o.toFixed(3)})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.o = Math.max(0.05, Math.min(0.65, p.o + p.od));
        if (p.o >= 0.65 || p.o <= 0.05) p.od *= -1;
        if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
        if (p.x < -5) p.x = W + 5;
        if (p.x > W + 5) p.x = -5;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,162,76,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Orb — top right */}
      <div
        className="fx-orb-1 absolute rounded-full"
        style={{
          width: 750, height: 750,
          top: -280, right: -180,
          background:
            "radial-gradient(circle, rgba(201,162,76,0.13) 0%, rgba(201,162,76,0.04) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Orb — bottom left */}
      <div
        className="fx-orb-2 absolute rounded-full"
        style={{
          width: 620, height: 620,
          bottom: "2%", left: -220,
          background:
            "radial-gradient(circle, rgba(201,162,76,0.10) 0%, rgba(201,162,76,0.02) 45%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Orb — center */}
      <div
        className="fx-orb-3 absolute rounded-full"
        style={{
          width: 520, height: 520,
          top: "45%", left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(201,162,76,0.07) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Scan line */}
      <div
        className="fx-scan absolute inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(201,162,76,0.4) 20%, rgba(229,197,128,0.9) 50%, rgba(201,162,76,0.4) 80%, transparent 100%)",
        }}
      />

      {/* HUD corners */}
      <span className="absolute top-[72px] left-5 block w-6 h-6 border-t border-l border-[rgba(201,162,76,0.35)]" />
      <span className="absolute top-[72px] right-5 block w-6 h-6 border-t border-r border-[rgba(201,162,76,0.35)]" />
      <span className="absolute bottom-5 left-5 block w-6 h-6 border-b border-l border-[rgba(201,162,76,0.35)]" />
      <span className="absolute bottom-5 right-5 block w-6 h-6 border-b border-r border-[rgba(201,162,76,0.35)]" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
