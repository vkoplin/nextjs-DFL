"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FEATURE_IMAGES = [
  {
    title: "Futuristic Football Experience",
    description: "Immerse yourself in the next generation of football gaming",
    images: [
      {
        src: "/images/realistic_futuristic_football_2_qb_throw.png",
        alt: "Quarterback throwing in futuristic football game",
      },
      {
        src: "/images/realistic_futuristic_football_game.png",
        alt: "Futuristic football gameplay",
      },
      {
        src: "/images/realistic_futuristic_football_1.png",
        alt: "Futuristic football stadium",
      },
    ],
  },
  {
    title: "Player Cards & Ownership",
    description: "Own and trade unique player NFTs with detailed statistics",
    images: [
      {
        src: "/images/player_card_j_richardson.png",
        alt: "Player card for J. Richardson",
      },
      {
        src: "/images/player_card_u_anderson.png",
        alt: "Player card for U. Anderson",
      },
      {
        src: "/images/ownership_dashboard_ui_1.png",
        alt: "Ownership dashboard interface",
      },
    ],
  },
  {
    title: "Team Management",
    description: "Manage your team with advanced analytics and trading tools",
    images: [
      {
        src: "/images/mobile_team_wallet_ui.png",
        alt: "Mobile team wallet interface",
      },
      {
        src: "/images/rewards_ui_team_wallet.png",
        alt: "Team rewards interface",
      },
      {
        src: "/images/ownership_ui_overlay.png",
        alt: "Ownership interface overlay",
      },
    ],
  },
  {
    title: "Community Governance",
    description: "Participate in community decisions and voting",
    images: [
      {
        src: "/images/governance_voting_ui.png",
        alt: "Governance voting interface",
      },
      {
        src: "/images/bonus_governance_ui_cyberpunk.png",
        alt: "Cyberpunk-style governance interface",
      },
    ],
  },
];

export function FeatureShowcase() {
  return (
    <section id="feature-showcase" className="py-16 bg-cyber-darker relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:2rem_2rem]" />
        <div className="absolute inset-0 bg-cyber-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h6 className="font-nfl mb-4 text-cyber-blue text-lg animate-neon-pulse">FEATURES</h6>
          <h2 className="font-nfl text-white text-4xl">
            Experience the Future
          </h2>
        </motion.div>

        <div className="space-y-24">
          {FEATURE_IMAGES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="lg:w-1/2 space-y-4">
                <h3 className="font-nfl text-white text-2xl animate-neon-pulse">{feature.title}</h3>
                <p className="text-cyber-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="grid grid-cols-2 gap-4">
                  {feature.images.map((image, imgIndex) => (
                    <motion.div
                      key={image.src}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + imgIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className={`relative ${
                        imgIndex === 0 ? "col-span-2 h-80" : "h-64"
                      } rounded-lg overflow-hidden group cursor-pointer shadow-cyber border border-cyber-blue/30`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 