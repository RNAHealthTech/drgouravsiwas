'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacityDir: number;
  color: string;
}

const COLORS = [
  'rgba(172, 178, 150, alpha)', // Earthy Sage Green
  'rgba(248, 238, 211, alpha)', // Warm Sand / Buttercream
  'rgba(254, 247, 231, alpha)', // Warm Off-White Cream
  'rgba(206, 212, 192, alpha)', // Soft Light Sage
];

export default function HeroCanvasAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Init particles
    const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 14000));
    particlesRef.current = Array.from({ length: count }, () => createParticle(canvas));

    // Lines connecting close particles
    function drawConnections(p: Particle[], c: CanvasRenderingContext2D) {
      for (let i = 0; i < p.length; i++) {
        for (let j = i + 1; j < p.length; j++) {
          const dx = p[i].x - p[j].x;
          const dy = p[i].y - p[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.12;
            c.strokeStyle = `rgba(172, 178, 150, ${alpha})`;
            c.lineWidth = 0.6;
            c.beginPath();
            c.moveTo(p[i].x, p[i].y);
            c.lineTo(p[j].x, p[j].y);
            c.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx || !canvas) return;

      // Deep earth brown gradient bg (from Swatch 4)
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#180f0b');
      gradient.addColorStop(0.5, '#2e1e17');
      gradient.addColorStop(1, '#180f0b');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle sage & cream radial glow center
      const radial = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.6
      );
      radial.addColorStop(0, 'rgba(172, 178, 150, 0.08)');
      radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      drawConnections(particlesRef.current, ctx);

      // Draw & move particles
      particlesRef.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacityDir * 0.008;
        if (p.opacity >= 0.7 || p.opacity <= 0.05) p.opacityDir *= -1;

        // Wrap around edges
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        const colorStr = p.color.replace('alpha', String(p.opacity.toFixed(2)));

        ctx.save();
        // Glow effect
        ctx.shadowBlur = p.radius * 4;
        ctx.shadowColor = p.color.replace('alpha', '0.4');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = colorStr;
        ctx.fill();
        ctx.restore();
      });

      animRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: 0,
      }}
    />
  );
}

function createParticle(canvas: HTMLCanvasElement): Particle {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2.2 + 0.6,
    speedX: (Math.random() - 0.5) * 0.45,
    speedY: (Math.random() - 0.5) * 0.45,
    opacity: Math.random() * 0.5 + 0.1,
    opacityDir: Math.random() > 0.5 ? 1 : -1,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}
