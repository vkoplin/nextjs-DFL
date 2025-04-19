"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { PageNav } from "@/components/page-nav";

const PARTNERS = [
  {
    name: "Solana Foundation",
    logo: "/images/partners/solana.png",
    description: "Official blockchain partner providing infrastructure and support for our platform.",
    category: "Technology"
  },
  {
    name: "Sports League",
    logo: "/images/partners/league.png",
    description: "Strategic partnership for team integration and fan engagement.",
    category: "Sports"
  },
  {
    name: "Crypto Exchange",
    logo: "/images/partners/exchange.png",
    description: "Integration partner for seamless token trading and liquidity.",
    category: "Finance"
  }
];

const PARTNERSHIP_OPPORTUNITIES = [
  {
    title: "Sports Teams",
    description: "Partner with us to tokenize your team and engage with fans in new ways.",
    benefits: [
      "Access to global fan base",
      "New revenue streams",
      "Enhanced fan engagement"
    ]
  },
  {
    title: "Technology Partners",
    description: "Join our ecosystem to build innovative solutions for sports ownership.",
    benefits: [
      "Access to our platform",
      "Technical support",
      "Marketing opportunities"
    ]
  },
  {
    title: "Community Partners",
    description: "Help us grow and engage our community of sports fans and crypto enthusiasts.",
    benefits: [
      "Exclusive events",
      "Community growth",
      "Brand exposure"
    ]
  }
];

export default function Partners() {
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
              Our Partners
            </Typography>
            <Typography
              variant="lead"
              className="text-gray-300"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Building the future of sports ownership together
            </Typography>
          </motion.div>
        </div>
      </div>

      {/* Current Partners */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Typography
          variant="h2"
          className="text-2xl font-bold text-white mb-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Current Partners
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <Typography
                    variant="h3"
                    className="text-xl font-bold text-white"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {partner.name}
                  </Typography>
                  <span className="text-cyber-blue text-sm">{partner.category}</span>
                </div>
              </div>
              <Typography
                className="text-gray-300"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {partner.description}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Partnership Opportunities */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Typography
          variant="h2"
          className="text-2xl font-bold text-white mb-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Partnership Opportunities
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARTNERSHIP_OPPORTUNITIES.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber"
            >
              <Typography
                variant="h3"
                className="text-xl font-bold text-white mb-4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {opportunity.title}
              </Typography>
              <Typography
                className="text-gray-300 mb-4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {opportunity.description}
              </Typography>
              <ul className="space-y-2">
                {opportunity.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="text-cyber-blue">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-cyber-blue text-white px-4 py-2 rounded-lg hover:bg-cyber-blue/80 transition-colors">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 