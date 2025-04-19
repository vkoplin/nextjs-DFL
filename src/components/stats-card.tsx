"use client";

import { motion, useAnimation } from "framer-motion";
import { Typography } from "@material-tailwind/react";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface StatsCardProps {
  count: string;
  title: string;
}

export function StatsCard({ count, title }: StatsCardProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  // Extract the numeric value and any suffix (like +, K, M, B)
  const numericValue = count.replace(/[^0-9.]/g, "");
  const suffix = count.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-lg bg-cyber-dark/80 backdrop-blur-sm border border-cyber-blue/30 shadow-cyber"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:1rem_1rem] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            scale: isInView ? 1 : 0.5 
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-2"
        >
          <Typography 
            variant="h3" 
            className="text-cyber-blue font-nfl text-3xl md:text-4xl animate-neon-pulse"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isInView ? 1 : 0,
              }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {numericValue}
            </motion.span>
            {suffix}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isInView ? 1 : 0, 
            y: isInView ? 0 : 10 
          }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Typography 
            className="text-cyber-light font-nfl-body"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {title}
          </Typography>
        </motion.div>

        {/* Hover Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyber-blue/30" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-cyber-blue origin-left"
        />
      </div>
    </motion.div>
  );
}

export default StatsCard;
