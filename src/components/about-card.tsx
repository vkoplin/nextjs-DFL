"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
}

const DETAILED_INFO = {
  "Blockchain Integration": {
    description: "Our platform leverages Solana blockchain technology to create a transparent and secure ecosystem for team ownership. This ensures that all transactions are fast, low-cost, and executed without intermediaries.",
    features: [
      "Solana program automation for secure transactions",
      "Immutable ownership records on the blockchain",
      "Decentralized governance system",
      "Cross-chain compatibility for wider accessibility",
      "24/7 global market access"
    ],
    status: "Active - Available Now"
  },
  "Digital Team Ownership": {
    description: "Experience true ownership of your favorite American Football team through Solana blockchain technology. Our platform enables you to buy, sell, and trade fractional shares with real financial benefits, including quarterly dividends, voting rights, and exclusive team experiences. Your ownership stake gives you a voice in team decisions and a share of team revenues.",
    features: [
      "Own as little as 0.1% of your favorite American Football team",
      "Receive quarterly dividends from team revenues",
      "Vote on key team decisions through our DAO system",
      "Access exclusive team events and experiences",
      "Trade shares 24/7 on our secure marketplace",
      "Track real-time team valuation and performance",
      "Participate in team revenue sharing",
      "Get priority access to team merchandise and tickets",
      "Join exclusive owner-only community events",
      "Influence team branding and marketing decisions"
    ],
    status: "Active - Available Now"
  },
  "Player NFT Trading": {
    description: "Collect, trade, and manage unique player NFTs with real-world performance data. Build your dream team with verifiable digital assets.",
    features: [
      "Limited edition player cards with unique attributes",
      "Dynamic stats that update based on real performance",
      "Rare and legendary card tiers with special benefits",
      "Trading marketplace with real-time price discovery",
      "Exclusive access to player events and experiences"
    ],
    status: "Coming Soon - Q2 2024"
  },
  "Community Governance": {
    description: "Participate in key decisions through our DAO system. Vote on platform updates, team strategies, and shape the future of digital football.",
    features: [
      "DAO-based decision making",
      "Community proposal system",
      "Transparent voting mechanisms",
      "Reward distribution system",
      "Treasury management"
    ],
    status: "In Development - Coming Q3 2024"
  }
};

export default function AboutCard({ title, description, subTitle }: AboutCardProp) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const detailedInfo = DETAILED_INFO[title as keyof typeof DETAILED_INFO];

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-lg bg-cyber-dark/80 backdrop-blur-sm border border-cyber-blue/30 shadow-cyber"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cyber-grid bg-[size:1rem_1rem] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6 flex flex-col h-[300px]">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 rounded-full bg-cyber-blue/20 text-cyber-blue text-sm font-medium mb-4">
              {subTitle}
            </div>
            <Typography 
              variant="h4" 
              className="text-white mb-4 font-nfl text-2xl"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {title}
            </Typography>
            <Typography 
              className="text-cyber-light"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {description}
            </Typography>
          </div>

          <motion.div
            whileHover={{ x: 5 }}
            className="mt-6"
          >
            <Button 
              variant="text" 
              className="flex items-center gap-2 text-cyber-blue hover:text-cyber-blue/80 transition-colors"
              onClick={() => setIsModalOpen(true)}
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Learn More
              <ArrowRightIcon strokeWidth={2} className="h-5 w-5" />
            </Button>
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
              className="bg-cyber-dark/95 backdrop-blur-md border border-cyber-blue/30 rounded-lg max-w-2xl w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-cyber-light hover:text-cyber-blue transition-colors"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-cyber-blue/20 text-cyber-blue text-sm font-medium mb-4">
                    {subTitle}
                  </div>
                  <h3 className="text-white font-nfl text-2xl mb-2">{title}</h3>
                  <p className="text-cyber-light mb-4">{detailedInfo?.description}</p>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse" />
                    <p className="text-cyber-light">{detailedInfo?.status}</p>
                  </div>
                </div>

                <div className="bg-cyber-dark/50 rounded-lg p-6 border border-cyber-blue/20">
                  <h4 className="text-cyber-blue font-medium mb-4 text-lg">Platform Features</h4>
                  <ul className="space-y-3">
                    {detailedInfo?.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-cyber-light">
                        <svg className="w-5 h-5 text-cyber-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
