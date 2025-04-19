"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { PageNav } from "@/components/page-nav";

const WHITEPAPER_SECTIONS = [
  {
    title: "Executive Summary",
    content: [
      {
        subtitle: "Vision",
        text: "DFL (Decentralized Football League) is revolutionizing sports ownership by leveraging blockchain technology to create a transparent, accessible, and engaging platform for fractional team ownership. Our mission is to democratize sports team ownership while providing real financial benefits to our community."
      },
      {
        subtitle: "Core Value Proposition",
        text: "1. Fractional Ownership: Own as little as 0.1% of your favorite team\n2. Real Financial Benefits: Receive quarterly dividends and voting rights\n3. 24/7 Trading: Buy and sell team shares anytime\n4. Community Governance: Participate in team decisions through our DAO\n5. Exclusive Experiences: Access to team events and unique opportunities"
      }
    ]
  },
  {
    title: "Technical Architecture",
    content: [
      {
        subtitle: "Blockchain Infrastructure",
        text: "DFL is built on the Solana blockchain, chosen for its:\n- High transaction throughput (65,000 TPS)\n- Low transaction costs\n- Fast confirmation times\n- Robust security features\n- Growing ecosystem of DeFi applications"
      },
      {
        subtitle: "Smart Contract System",
        text: "Our platform utilizes a sophisticated smart contract system that handles:\n- Team share tokenization\n- Dividend distribution\n- Voting mechanisms\n- Trading execution\n- Governance proposals"
      }
    ]
  },
  {
    title: "Tokenomics",
    content: [
      {
        subtitle: "Team Share Tokens",
        text: "Each team's shares are represented as SPL tokens on Solana:\n- Fixed supply per team\n- Fractional ownership possible\n- Transferable and tradeable\n- Backed by real team equity"
      },
      {
        subtitle: "Revenue Model",
        text: "1. Trading Fees: 1% on all transactions\n2. Platform Fees: 0.5% on dividend distributions\n3. Premium Features: Enhanced analytics and tools\n4. Partnership Revenue: Team collaborations and sponsorships"
      }
    ]
  },
  {
    title: "Governance",
    content: [
      {
        subtitle: "DAO Structure",
        text: "The DFL DAO enables:\n- Team-specific governance\n- Platform-wide decisions\n- Proposal submission and voting\n- Treasury management\n- Protocol upgrades"
      },
      {
        subtitle: "Voting Rights",
        text: "1. One share = One vote\n2. Quadratic voting for fair representation\n3. Delegation options\n4. Time-locked voting for major decisions"
      }
    ]
  },
  {
    title: "Roadmap",
    content: [
      {
        subtitle: "Phase 1: Foundation",
        text: "Q1 2024:\n- Platform launch\n- Initial team listings\n- Basic trading features\n- Wallet integration"
      },
      {
        subtitle: "Phase 2: Growth",
        text: "Q2 2024:\n- Additional team listings\n- Advanced trading features\n- Mobile app launch\n- Governance implementation"
      },
      {
        subtitle: "Phase 3: Expansion",
        text: "Q3-Q4 2024:\n- International expansion\n- Enhanced analytics\n- NFT integration\n- Partnership programs"
      }
    ]
  }
];

export default function Whitepaper() {
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
              DFL Whitepaper
            </Typography>
            <Typography
              variant="lead"
              className="text-gray-300"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              The complete technical and economic documentation of the DFL platform.
            </Typography>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {WHITEPAPER_SECTIONS.map((section, index) => (
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