"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is DFL Token?",
    answer: "DFL Token is a digital asset that represents ownership in NFL team performance. Each token is backed by smart contracts on the blockchain, enabling secure, transparent, and decentralized trading of team shares."
  },
  {
    question: "How do I start trading team shares?",
    answer: "To start trading, you'll need a Web3 wallet like MetaMask. Connect your wallet to our platform, complete the KYC process, and you can begin trading team shares using cryptocurrency or fiat payment methods."
  },
  {
    question: "What determines a team's token value?",
    answer: "Team token values are influenced by multiple factors including team performance, market demand, trading volume, and overall market conditions. Our smart contracts ensure transparent price discovery."
  },
  {
    question: "Are the tokens regulated?",
    answer: "Yes, DFL operates within regulatory frameworks for digital assets. We comply with relevant securities regulations and maintain strict KYC/AML procedures to ensure a safe trading environment."
  },
  {
    question: "What blockchain technology do you use?",
    answer: "We utilize Ethereum for base layer security and Polygon for scalability. Smart contracts are audited by leading security firms, and we use Chainlink oracles for reliable price feeds and data."
  },
  {
    question: "How are dividends distributed?",
    answer: "Token holders receive proportional rewards based on team performance and platform revenue. Rewards are automatically distributed through smart contracts, with transactions visible on the blockchain."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Cyberpunk background pattern */}
      <div className="absolute inset-0 bg-cyber-dark/95 backdrop-blur-sm">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-dark/50 to-cyber-dark" />
        {/* Animated grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(6, 182, 212, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(6, 182, 212, 0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(6, 182, 212, 0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(6, 182, 212, 0.1) 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          animation: 'cyber-grid 20s linear infinite'
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl font-cyber text-cyan-400 tracking-[0.2em] mb-4 animate-neon-pulse"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Everything You Need to Know
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Get answers to the most common questions about trading team shares on the blockchain
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 bg-cyber-dark/50 backdrop-blur rounded-xl border border-cyan-900/30 hover:border-cyan-400/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex justify-between items-center relative">
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                    {item.question}
                  </h3>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 text-gray-400 leading-relaxed border-t border-cyan-900/30 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
