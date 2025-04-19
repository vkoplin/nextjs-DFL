"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Digital Team Ownership",
    description:
      "Become a real owner of your favorite American Football team through blockchain technology. Buy, sell, and trade fractional shares with real financial benefits, including quarterly dividends, voting rights, and exclusive team experiences.",
    subTitle: "OWNERSHIP",
  },
  {
    title: "Player NFT Trading",
    description:
      "Collect, trade, and manage unique player NFTs with real-world performance data. Build your dream team with verifiable digital assets.",
    subTitle: "TRADING",
  },
  {
    title: "Community Governance",
    description:
      "Participate in key decisions through our DAO system. Vote on platform updates, team strategies, and shape the future of digital football.",
    subTitle: "GOVERNANCE",
  }
];

export function AboutEvent() {
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
            PLATFORM FEATURES
          </Typography>
          <Typography 
            variant="h2" 
            className="font-nfl text-white text-4xl"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Why Join The Future?
          </Typography>
        </div>

        <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENT_INFO.map((props, idx) => (
            <AboutCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
