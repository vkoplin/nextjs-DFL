"use client";

import { TeamCard } from "./team-card";
import { ChartBarIcon, CurrencyDollarIcon, UsersIcon, TrophyIcon } from "@heroicons/react/24/solid";

const TEAMS = [
  {
    name: "Eagles",
    city: "Philadelphia",
    value: "$2.5B",
    performance: "+12.5%",
    rank: 1,
    image: "/images/teams/eagles.jpg",
    marketCap: "1.2M",
    holders: "5.2K",
    volume24h: "$450K"
  },
  {
    name: "Cowboys",
    city: "Dallas",
    value: "$2.3B",
    performance: "+8.2%",
    rank: 2,
    image: "/images/teams/cowboys.jpg",
    marketCap: "1.1M",
    holders: "4.8K",
    volume24h: "$420K"
  },
  {
    name: "Patriots",
    city: "New England",
    value: "$2.1B",
    performance: "+5.7%",
    rank: 3,
    image: "/images/teams/patriots.jpg",
    marketCap: "1.0M",
    holders: "4.5K",
    volume24h: "$380K"
  },
  {
    name: "Giants",
    city: "New York",
    value: "$1.9B",
    performance: "+3.4%",
    rank: 4,
    image: "/images/teams/giants.jpg",
    marketCap: "0.9M",
    holders: "4.2K",
    volume24h: "$350K"
  }
];

export function TeamsSection() {
  return (
    <section id="market" className="py-16 bg-cyber-darker relative overflow-hidden">
      {/* Blockchain Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:2rem_2rem]" />
        <div className="absolute inset-0 bg-cyber-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h6 className="font-nfl mb-4 text-cyber-blue text-lg animate-neon-pulse">
            TRADE TEAM SHARES
          </h6>
          <h2 className="font-nfl text-white text-4xl">
            Available Teams
          </h2>
        </div>

        {/* Market Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-4 border border-cyber-blue/30 shadow-cyber">
            <div className="flex items-center gap-2 mb-2">
              <CurrencyDollarIcon className="h-5 w-5 text-cyber-blue" />
              <p className="text-cyber-light font-nfl-body text-sm">
                Total Market Cap
              </p>
            </div>
            <p className="text-white font-nfl text-xl">
              $4.2M
            </p>
          </div>
          <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-4 border border-cyber-blue/30 shadow-cyber">
            <div className="flex items-center gap-2 mb-2">
              <ChartBarIcon className="h-5 w-5 text-cyber-blue" />
              <p className="text-cyber-light font-nfl-body text-sm">
                24h Volume
              </p>
            </div>
            <p className="text-white font-nfl text-xl">
              $1.6M
            </p>
          </div>
          <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-4 border border-cyber-blue/30 shadow-cyber">
            <div className="flex items-center gap-2 mb-2">
              <UsersIcon className="h-5 w-5 text-cyber-blue" />
              <p className="text-cyber-light font-nfl-body text-sm">
                Active Holders
              </p>
            </div>
            <p className="text-white font-nfl text-xl">
              18.7K
            </p>
          </div>
          <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-4 border border-cyber-blue/30 shadow-cyber">
            <div className="flex items-center gap-2 mb-2">
              <TrophyIcon className="h-5 w-5 text-cyber-blue" />
              <p className="text-cyber-light font-nfl-body text-sm">
                Available Teams
              </p>
            </div>
            <p className="text-white font-nfl text-xl">
              32
            </p>
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAMS.map((team) => (
            <TeamCard key={team.name} {...team} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamsSection; 