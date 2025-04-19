"use client";

import { useEffect, useRef } from "react";

interface BlockchainGridProps {
  className?: string;
}

export function BlockchainGrid({ className = "" }: BlockchainGridProps) {
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

    // Grid cell class
    class GridCell {
      x: number;
      y: number;
      size: number;
      opacity: number;

      constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.opacity = Math.random() * 0.1 + 0.05;
      }

      draw() {
        if (!ctx) return;
        ctx.strokeStyle = `rgba(255, 77, 77, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(this.x, this.y, this.size, this.size);
      }
    }

    // Create grid cells
    const cells: GridCell[] = [];
    const cellSize = 40;
    const numCols = Math.ceil(canvas.width / cellSize);
    const numRows = Math.ceil(canvas.height / cellSize);

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        cells.push(new GridCell(col * cellSize, row * cellSize, cellSize));
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid cells
      cells.forEach((cell) => {
        cell.draw();
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
      style={{ opacity: 0.1 }}
    />
  );
} 