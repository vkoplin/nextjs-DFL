"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  city: string;
  value: string;
  performance: string;
  rank: number;
  image: string;
  marketCap: string;
  holders: string;
  volume24h: string;
}

export function TeamCard({
  name,
  city,
  value,
  performance,
  rank,
  image,
  marketCap,
  holders,
  volume24h,
}: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="bg-cyber-dark/80 backdrop-blur-sm rounded-lg overflow-hidden border border-cyber-blue/30 shadow-cyber"
    >
      <div className="relative h-80 w-full bg-cyber-darker">
        <Image
          src={image}
          alt={`${city} ${name}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-2xl font-nfl animate-neon-pulse">{city} {name}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-cyber-light text-sm">Value</p>
            <p className="text-white text-lg font-nfl">{value}</p>
          </div>
          <div className="text-right">
            <p className="text-cyber-light text-sm">Performance</p>
            <p className={`${performance.startsWith('+') ? 'text-cyber-blue' : 'text-cyber-pink'} text-lg font-nfl`}>
              {performance}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="text-cyber-light text-xs">Market Cap</p>
            <p className="text-white text-sm font-nfl">{marketCap}</p>
          </div>
          <div>
            <p className="text-cyber-light text-xs">Holders</p>
            <p className="text-white text-sm font-nfl">{holders}</p>
          </div>
          <div>
            <p className="text-cyber-light text-xs">24h Volume</p>
            <p className="text-white text-sm font-nfl">{volume24h}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TeamCard; 