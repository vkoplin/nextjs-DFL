"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function PageNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/80 backdrop-blur-sm border-b border-cyber-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-cyber-blue">DFL</span>
            </Link>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="text-gray-300 hover:text-cyber-blue transition-colors"
              >
                Back to Main Site
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
} 