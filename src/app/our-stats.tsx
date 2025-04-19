"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "$4.2B",
    title: "Total Market Cap",
  },
  {
    count: "32",
    title: "Teams Available",
  },
  {
    count: "250K+",
    title: "Active Traders",
  },
  {
    count: "$850M",
    title: "24h Volume",
  },
];

export function OurStats() {
  return (
    <section className="py-16 bg-cyber-darker relative overflow-hidden">
      {/* Cyberpunk Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:2rem_2rem]" />
        <div className="absolute inset-0 bg-cyber-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Typography 
            variant="h6" 
            className="font-nfl mb-4 text-cyber-blue text-lg animate-neon-pulse"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            MARKET METRICS
          </Typography>
          <Typography 
            variant="h2" 
            className="font-nfl text-white text-4xl"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Platform Statistics
          </Typography>
          <Typography 
            className="mt-4 text-cyber-light max-w-2xl mx-auto"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Track real-time market performance, trading volumes, and platform growth. Our transparent blockchain infrastructure ensures accurate and verifiable statistics.
          </Typography>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
