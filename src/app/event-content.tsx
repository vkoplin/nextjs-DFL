"use client";

import {
  Tab,
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import { motion } from "framer-motion";
import EventContentCard from "@/components/event-content-card";

const EVENT_CONTENT = {
  Foundation: [
    {
      title: "Vision & Core Game Mechanics",
      des: "Establish the fundamental game mechanics, smart contract architecture, and blockchain infrastructure. This phase focuses on creating a solid foundation for the game's economy, player interactions, and blockchain integration.",
      name: "Game Development Team",
      position: "Core Development",
      panel: "Foundation Phase",
      img: "/images/roadmap/roadmap_phase_01_vision.png",
    },
    {
      title: "Team Ownership Launch",
      des: "Building secure and efficient smart contracts for player ownership, team management, and in-game transactions. Implementing ERC-721 and ERC-1155 standards for NFT functionality.",
      name: "Blockchain Team",
      position: "Smart Contract Development",
      panel: "Foundation Phase",
      img: "/images/roadmap/roadmap_phase_02_team_ownership_launch.png",
    }
  ],
  Development: [
    {
      title: "Player NFT Drop",
      des: "Develop key game features including team management, player cards, and NFT marketplace. This phase brings the game to life with interactive elements, trading mechanics, and player progression systems.",
      name: "Game Development Team",
      position: "Feature Development",
      panel: "Development Phase",
      img: "/images/roadmap/roadmap_phase_03_player_nft_drop.png",
    },
    {
      title: "Marketplace Launch",
      des: "Creating unique digital player cards as NFTs, each with their own attributes, statistics, and history. Implementing a dynamic rating system based on real-world performance.",
      name: "NFT Development Team",
      position: "NFT Implementation",
      panel: "Development Phase",
      img: "/images/roadmap/roadmap_phase_04_marketplace_launch.png",
    }
  ],
  Launch: [
    {
      title: "Match Simulation & Live Events",
      des: "Comprehensive testing, performance optimization, and preparation for launch. This phase ensures a smooth user experience, secure transactions, and a polished final product ready for the community.",
      name: "Game Development Team",
      position: "Quality Assurance",
      panel: "Launch Phase",
      img: "/images/roadmap/roadmap_phase_05_match_simulation_live.png",
    },
    {
      title: "Governance & Rewards",
      des: "Launching community features including marketplace, trading system, governance platform, and rewards system. Implementing DAO functionality for community-driven development decisions and leaderboards for competitive engagement.",
      name: "Community Team",
      position: "Community Development",
      panel: "Launch Phase",
      img: "/images/roadmap/roadmap_phase_06_governance_voting.png",
    }
  ],
};

export function EventContent() {
  const [activeTab, setActiveTab] = useState("Foundation");

  const data = [
    {
      label: "Foundation",
      value: "Foundation",
      desc: EVENT_CONTENT.Foundation,
    },
    {
      label: "Development",
      value: "Development",
      desc: EVENT_CONTENT.Development,
    },
    {
      label: "Launch",
      value: "Launch",
      desc: EVENT_CONTENT.Launch,
    },
  ];

  return (
    <section className="py-16 bg-nfl-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h6 className="font-nfl mb-4 text-white text-lg">
            DEVELOPMENT PHASES
          </h6>
          <h2 className="font-nfl text-nfl-heading text-white text-4xl">
            Our Roadmap
          </h2>
        </motion.div>

        <Tabs value={activeTab} onChange={(value: string) => setActiveTab(value)}>
          <div className="w-full flex mb-12 flex-col items-center">
            <TabsHeader 
              className="h-12 w-72 md:w-96 bg-nfl-navy/50 backdrop-blur-sm border border-nfl-red/20"
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              placeholder=""
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className="font-nfl text-white data-[active]:bg-nfl-red/20 data-[active]:text-white hover:text-nfl-red transition-colors duration-300"
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  placeholder=""
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </div>
          <TabsBody
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            placeholder=""
          >
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mx-auto container"
                >
                  {desc.map((props, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <EventContentCard {...props} />
                    </motion.div>
                  ))}
                </motion.div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </section>
  );
}

export default EventContent;
