"use client";

import { Button, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('feature-showcase');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero/own_the_future.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-4xl md:text-6xl lg:text-7xl font-nfl tracking-wider"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            OWN THE FUTURE
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mb-8 text-4xl md:text-6xl lg:text-7xl font-nfl tracking-wider"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            OF FOOTBALL
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link href="/game">
            <Button
              size="lg"
              color="white"
              className="bg-cyber-blue hover:bg-cyber-blue/90 hover:scale-105 transform transition-all text-xl py-4 px-8 rounded-full font-nfl tracking-wider"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              ENTER GAME
            </Button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <ArrowDownIcon className="h-8 w-8 text-white opacity-80 hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
