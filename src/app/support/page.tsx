"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageNav } from "@/components/page-nav";

const FAQ_ITEMS = [
  {
    question: "How do I get started with DFL?",
    answer: "To get started, you'll need to create an account, connect your Solana wallet, and complete the KYC verification process. Once verified, you can start trading team shares."
  },
  {
    question: "What is the minimum investment amount?",
    answer: "The minimum investment amount varies by team, but you can start with as little as $100. Each team's share price is determined by market demand and team performance."
  },
  {
    question: "How are dividends distributed?",
    answer: "Dividends are distributed quarterly based on team performance and revenue. You'll receive your share directly to your connected wallet."
  },
  {
    question: "Can I sell my team shares at any time?",
    answer: "Yes, team shares are fully liquid and can be traded 24/7 on our platform. The market determines the price based on supply and demand."
  }
];

export default function Support() {
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
              Support Center
            </Typography>
            <Typography
              variant="lead"
              className="text-gray-300"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Get help with your account, trading, or any other questions you might have.
            </Typography>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber"
          >
            <Typography
              variant="h2"
              className="text-2xl font-bold text-white mb-4"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Contact Us
            </Typography>
            <div className="space-y-4">
              <div>
                <Typography
                  className="text-gray-400"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  Email
                </Typography>
                <Link
                  href="mailto:support@dfl.com"
                  className="text-cyber-blue hover:text-cyber-blue/80 transition-colors"
                >
                  support@dfl.com
                </Link>
              </div>
              <div>
                <Typography
                  className="text-gray-400"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  Discord
                </Typography>
                <Link
                  href="https://discord.gg/dfl"
                  className="text-cyber-blue hover:text-cyber-blue/80 transition-colors"
                >
                  Join our Discord
                </Link>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber"
          >
            <Typography
              variant="h2"
              className="text-2xl font-bold text-white mb-4"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Frequently Asked Questions
            </Typography>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <div key={index}>
                  <Typography
                    className="text-white font-semibold mb-2"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {item.question}
                  </Typography>
                  <Typography
                    className="text-gray-300"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {item.answer}
                  </Typography>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 