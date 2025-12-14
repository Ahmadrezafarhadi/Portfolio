"use client";

import { useEffect, useRef } from "react";
import NavBar from "./Navbar";

export default function ClientLayout({ children }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let mouse = { x: null, y: null };
    const numParticles = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Mouse tracking for interactive particles
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Create particles with more variety
    for (let i = 0; i < numParticles; i++) {
      const colors = [
        "rgba(59, 130, 246, 0.6)",  // Blue
        "rgba(147, 51, 234, 0.6)",  // Purple
        "rgba(6, 182, 212, 0.6)",   // Cyan
        "rgba(236, 72, 153, 0.5)",  // Pink
        "rgba(34, 197, 94, 0.5)",   // Green
      ];

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 1,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
        baseDx: (Math.random() - 0.5) * 0.8,
        baseDy: (Math.random() - 0.5) * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100 + 100,
        maxLife: Math.random() * 100 + 100,
        sizeVariation: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        // Mouse interaction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const force = (120 - distance) / 120;
            p.dx += (dx / distance) * force * 0.02;
            p.dy += (dy / distance) * force * 0.02;
          }
        }

        // Apply friction to mouse influence
        p.dx = p.dx * 0.98 + p.baseDx * 0.02;
        p.dy = p.dy * 0.98 + p.baseDy * 0.02;

        // Update position
        p.x += p.dx;
        p.y += p.dy;
        p.rotation += p.rotationSpeed;

        // Bounce off walls with some energy loss
        if (p.x < 0 || p.x > canvas.width) {
          p.dx *= -0.8;
          p.x = Math.max(0, Math.min(canvas.width, p.x));
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.dy *= -0.8;
          p.y = Math.max(0, Math.min(canvas.height, p.y));
        }

        // Update life and size
        p.life--;
        const lifeRatio = p.life / p.maxLife;
        const currentSize = p.r * p.sizeVariation * (0.3 + lifeRatio * 0.7);

        // Respawn particles
        if (p.life <= 0) {
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
          p.life = p.maxLife;
          p.dx = p.baseDx;
          p.dy = p.baseDy;
        }

        // Draw particle with enhanced effects
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Main particle
        ctx.beginPath();
        ctx.arc(0, 0, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace('0.6', (0.3 + lifeRatio * 0.4).toString()).replace('0.5', (0.2 + lifeRatio * 0.3).toString());
        ctx.shadowBlur = 15 * lifeRatio;
        ctx.shadowColor = p.color;
        ctx.fill();

        // Inner glow
        ctx.beginPath();
        ctx.arc(0, 0, currentSize * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace('0.6', '0.9').replace('0.5', '0.8');
        ctx.shadowBlur = 20 * lifeRatio;
        ctx.shadowColor = p.color;
        ctx.fill();

        ctx.restore();

        // Draw connections between nearby particles
        particles.slice(index + 1).forEach(otherP => {
          const dx = otherP.x - p.x;
          const dy = otherP.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3 * lifeRatio * (otherP.life / otherP.maxLife);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(otherP.x, otherP.y);
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      particles = [];
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      />

      <div className="relative z-20">
        <NavBar />
      </div>

      <main className="relative z-10">{children}</main>
    </>
  );
}
