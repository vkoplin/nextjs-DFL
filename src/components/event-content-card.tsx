"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface EventContentCardProps {
  title: string;
  des: string;
  name: string;
  position: string;
  panel: string;
  img: string;
}

const DETAILED_INFO = {
  "Vision & Core Game Mechanics": {
    features: [
      "Smart contract architecture design",
      "Game economy modeling",
      "Player interaction systems",
      "Blockchain integration framework",
      "Security and scalability planning"
    ],
    timeline: "Q1 2024",
    team: "Core Development Team",
    status: "In Development"
  },
  "Team Ownership Launch": {
    features: [
      "ERC-721 NFT implementation",
      "Team management system",
      "Ownership transfer protocols",
      "Transaction security measures",
      "Gas optimization"
    ],
    timeline: "Q2 2024",
    team: "Blockchain Team",
    status: "Planning"
  },
  "Player NFT Drop": {
    features: [
      "Player card design system",
      "Attribute generation algorithm",
      "Rarity distribution",
      "Minting process",
      "Metadata management"
    ],
    timeline: "Q3 2024",
    team: "NFT Development Team",
    status: "Upcoming"
  },
  "Marketplace Launch": {
    features: [
      "Trading interface",
      "Auction system",
      "Price discovery mechanism",
      "Transaction history",
      "User dashboard"
    ],
    timeline: "Q4 2024",
    team: "Marketplace Team",
    status: "Upcoming"
  },
  "Match Simulation & Live Events": {
    features: [
      "Match engine development",
      "Live event integration",
      "Performance tracking",
      "Reward distribution",
      "Community engagement"
    ],
    timeline: "Q1 2025",
    team: "Game Development Team",
    status: "Upcoming"
  },
  "Governance & Rewards": {
    features: [
      "DAO implementation",
      "Voting system",
      "Reward distribution",
      "Community proposals",
      "Treasury management"
    ],
    timeline: "Q2 2025",
    team: "Community Team",
    status: "Upcoming"
  }
};

export function EventContentCard({
  title,
  des,
  name,
  position,
  panel,
  img,
}: EventContentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const detailedInfo = DETAILED_INFO[title as keyof typeof DETAILED_INFO];

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="mb-8"
      >
        <div className="bg-cyber-dark/80 backdrop-blur-sm border border-cyber-blue/30 overflow-hidden rounded-lg shadow-cyber">
          <div className="h-96 relative group overflow-hidden bg-cyber-darker">
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-nfl text-white text-2xl mb-2 animate-neon-pulse">{title}</h3>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-sm rounded-full font-medium">
                  {panel}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <p className="text-cyber-light leading-relaxed mb-6">{des}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyber-blue/20 flex items-center justify-center">
                <span className="text-cyber-blue font-bold text-lg">
                  {name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-nfl text-white text-lg">{name}</h4>
                <p className="text-cyber-light text-sm">{position}</p>
              </div>
            </div>
          </div>
          <div className="pt-0 px-6 pb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
                <span className="text-cyber-light text-sm">In Progress</span>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm font-medium hover:bg-cyber-blue/30 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-cyber-dark/95 backdrop-blur-sm border border-cyber-blue/30 rounded-lg max-w-2xl w-full p-6"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-nfl text-white text-2xl mb-2">{title}</h3>
                  <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-sm rounded-full font-medium">
                    {panel}
                  </span>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-cyber-light hover:text-cyber-blue transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-cyber-blue font-medium mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {detailedInfo.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-cyber-light">
                        <svg className="w-4 h-4 text-cyber-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-cyber-blue font-medium mb-2">Timeline</h4>
                    <p className="text-cyber-light">{detailedInfo.timeline}</p>
                  </div>
                  <div>
                    <h4 className="text-cyber-blue font-medium mb-2">Status</h4>
                    <p className="text-cyber-light">{detailedInfo.status}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-cyber-blue font-medium mb-2">Team</h4>
                  <p className="text-cyber-light">{detailedInfo.team}</p>
                </div>

                <div>
                  <h4 className="text-cyber-blue font-medium mb-2">Description</h4>
                  <p className="text-cyber-light">{des}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default EventContentCard;
