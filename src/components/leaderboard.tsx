"use client";

import { motion } from "framer-motion";
import { TrophyIcon, ChartBarIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

interface LeaderboardEntry {
  rank: number;
  username: string;
  portfolioValue: string;
  performance: string;
  trades: number;
}

const LEADERBOARD_DATA: LeaderboardEntry[] = [
  {
    rank: 1,
    username: "CryptoTrader",
    portfolioValue: "$125,432",
    performance: "+24.5%",
    trades: 42,
  },
  {
    rank: 2,
    username: "BlockchainPro",
    portfolioValue: "$98,765",
    performance: "+18.2%",
    trades: 38,
  },
  {
    rank: 3,
    username: "NFTMaster",
    portfolioValue: "$87,654",
    performance: "+15.7%",
    trades: 35,
  },
  {
    rank: 4,
    username: "DeFiExplorer",
    portfolioValue: "$76,543",
    performance: "+12.3%",
    trades: 31,
  },
  {
    rank: 5,
    username: "Web3Wizard",
    portfolioValue: "$65,432",
    performance: "+10.8%",
    trades: 28,
  },
];

export function Leaderboard() {
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
          <h6 className="font-nfl mb-4 text-white text-lg">LEADERBOARD</h6>
          <h2 className="font-nfl text-nfl-heading text-white text-4xl">
            Top Traders
          </h2>
        </motion.div>

        <div className="bg-nfl-navy/50 backdrop-blur-sm rounded-lg border border-nfl-red/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-nfl-red/20">
                  <th className="py-4 px-6 text-left">
                    <p className="text-white font-nfl text-sm">Rank</p>
                  </th>
                  <th className="py-4 px-6 text-left">
                    <p className="text-white font-nfl text-sm">Trader</p>
                  </th>
                  <th className="py-4 px-6 text-right">
                    <p className="text-white font-nfl text-sm">Portfolio Value</p>
                  </th>
                  <th className="py-4 px-6 text-right">
                    <p className="text-white font-nfl text-sm">Performance</p>
                  </th>
                  <th className="py-4 px-6 text-right">
                    <p className="text-white font-nfl text-sm">Trades</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {LEADERBOARD_DATA.map((entry, index) => (
                  <motion.tr
                    key={entry.username}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-nfl-red/10 hover:bg-nfl-red/5 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        {entry.rank <= 3 ? (
                          <TrophyIcon
                            className={`h-6 w-6 ${
                              entry.rank === 1
                                ? "text-yellow-500"
                                : entry.rank === 2
                                ? "text-gray-400"
                                : "text-amber-700"
                            }`}
                          />
                        ) : (
                          <span className="text-white font-nfl">{entry.rank}</span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-white font-nfl">{entry.username}</p>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <p className="text-white font-nfl">{entry.portfolioValue}</p>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <p
                        className={`font-nfl ${
                          entry.performance.startsWith("+")
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {entry.performance}
                      </p>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <p className="text-white font-nfl">{entry.trades}</p>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-nfl-navy/50 backdrop-blur-sm rounded-lg p-6 border border-nfl-red/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-nfl-red/20 rounded-lg">
                <ChartBarIcon className="h-6 w-6 text-nfl-red" />
              </div>
              <div>
                <p className="text-white font-nfl text-lg">Total Traders</p>
                <p className="text-gray-400 text-sm">Active participants</p>
              </div>
            </div>
            <p className="text-white font-nfl text-3xl">1,234</p>
          </div>
          <div className="bg-nfl-navy/50 backdrop-blur-sm rounded-lg p-6 border border-nfl-red/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-nfl-red/20 rounded-lg">
                <ArrowTrendingUpIcon className="h-6 w-6 text-nfl-red" />
              </div>
              <div>
                <p className="text-white font-nfl text-lg">Total Volume</p>
                <p className="text-gray-400 text-sm">Trading activity</p>
              </div>
            </div>
            <p className="text-white font-nfl text-3xl">$4.2M</p>
          </div>
          <div className="bg-nfl-navy/50 backdrop-blur-sm rounded-lg p-6 border border-nfl-red/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-nfl-red/20 rounded-lg">
                <TrophyIcon className="h-6 w-6 text-nfl-red" />
              </div>
              <div>
                <p className="text-white font-nfl text-lg">Active Trades</p>
                <p className="text-gray-400 text-sm">Current positions</p>
              </div>
            </div>
            <p className="text-white font-nfl text-3xl">567</p>
          </div>
        </div>
      </div>
    </section>
  );
} 