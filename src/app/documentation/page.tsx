"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { PageNav } from "@/components/page-nav";

const DOCUMENTATION_SECTIONS = [
  {
    title: "Getting Started",
    content: [
      {
        subtitle: "What is DFL?",
        text: "DFL (Decentralized Football League) is a revolutionary platform that allows you to own and trade shares of professional football teams using blockchain technology. Our platform combines the excitement of sports with the innovation of decentralized finance."
      },
      {
        subtitle: "How to Get Started",
        text: "1. Connect your wallet\n2. Browse available teams\n3. Purchase team shares\n4. Track your portfolio\n5. Participate in team governance"
      }
    ]
  },
  {
    title: "Team Ownership",
    content: [
      {
        subtitle: "Fractional Ownership",
        text: "Own as little as 0.1% of your favorite team. Each share represents a real ownership stake with tangible benefits including quarterly dividends, voting rights, and exclusive team experiences."
      },
      {
        subtitle: "Trading Mechanics",
        text: "Shares can be bought and sold on our platform 24/7. Prices are determined by market demand and team performance. All transactions are executed on the Solana blockchain for fast, low-cost trading."
      }
    ]
  },
  {
    title: "Platform Features",
    content: [
      {
        subtitle: "Portfolio Management",
        text: "Track your investments, view performance metrics, and manage your team shares all in one place. Our dashboard provides real-time updates and analytics."
      },
      {
        subtitle: "Governance",
        text: "As a team owner, you have the right to vote on key decisions affecting your team. Participate in governance through our DAO system."
      }
    ]
  }
];

export default function Documentation() {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <PageNav />
      
      {/* Header */}
      <div className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/50 to-cyber-dark" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              className="text-4xl font-bold text-white mb-4"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Documentation
            </Typography>
            <Typography
              variant="lead"
              className="text-gray-300"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Learn everything you need to know about DFL and start your journey as a team owner.
            </Typography>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {DOCUMENTATION_SECTIONS.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-8 border border-cyber-blue/30 shadow-cyber"
            >
              <Typography
                variant="h2"
                className="text-2xl font-bold text-cyber-blue mb-6"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {section.title}
              </Typography>
              
              <div className="space-y-8">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex} className="space-y-2">
                    <Typography
                      variant="h3"
                      className="text-xl font-semibold text-white"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      {item.subtitle}
                    </Typography>
                    <Typography
                      className="text-gray-300 whitespace-pre-line"
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    >
                      {item.text}
                    </Typography>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 