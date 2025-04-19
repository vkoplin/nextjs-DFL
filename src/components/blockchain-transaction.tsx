"use client";

import { useEffect, useRef } from "react";

interface BlockchainTransactionProps {
  className?: string;
}

export function BlockchainTransaction({ className = "" }: BlockchainTransactionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Transaction class
    class Transaction {
      x: number;
      y: number;
      size: number;
      speed: number;
      angle: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.5 + 0.2;
        this.angle = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.angle += this.speed;
        this.x += Math.cos(this.angle) * 2;
        this.y += Math.sin(this.angle) * 2;

        // Wrap around screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 77, 77, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Create transactions
    const transactions: Transaction[] = [];
    const numTransactions = 30;
    for (let i = 0; i < numTransactions; i++) {
      transactions.push(new Transaction());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw transactions
      transactions.forEach((transaction) => {
        transaction.update();
        transaction.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ opacity: 0.2 }}
    />
  );
} 