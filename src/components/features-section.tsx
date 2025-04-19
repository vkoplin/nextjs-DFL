"use client";

import { Typography } from "@material-tailwind/react";
import {
  ShieldCheckIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  LockClosedIcon,
  GlobeAltIcon
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    title: "Solana-Powered Ownership",
    description: "Leverage Solana's high-speed, low-cost blockchain for seamless team ownership transactions and governance.",
    icon: "blockchain"
  },
  {
    title: "Smart Contract Automation",
    description: "Automated Solana programs ensure secure and transparent execution of all ownership-related transactions.",
    icon: "automation"
  },
  {
    title: "Secure Transactions",
    description: "Built on blockchain technology ensuring transparent and immutable transactions for all team shares.",
    icon: ShieldCheckIcon,
    color: "text-nfl-red"
  },
  {
    title: "Real-time Market Data",
    description: "Access live market data, team performance metrics, and historical trading patterns.",
    icon: ChartBarIcon,
    color: "text-nfl-red"
  },
  {
    title: "Fractional Ownership",
    description: "Purchase and trade fractional shares of your favorite American Football teams with minimal investment.",
    icon: CurrencyDollarIcon,
    color: "text-nfl-red"
  },
  {
    title: "Community Governance",
    description: "Participate in team decisions through decentralized governance mechanisms.",
    icon: UserGroupIcon,
    color: "text-nfl-red"
  },
  {
    title: "Smart Contract Security",
    description: "Automated and secure trading through audited smart contracts on the blockchain.",
    icon: LockClosedIcon,
    color: "text-nfl-red"
  },
  {
    title: "Global Accessibility",
    description: "Trade team shares from anywhere in the world with 24/7 market access.",
    icon: GlobeAltIcon,
    color: "text-nfl-red"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 bg-nfl-navy relative overflow-hidden">
      {/* Blockchain Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Typography variant="h6" color="white" className="font-nfl mb-4">
            WHY CHOOSE US
          </Typography>
          <Typography variant="h2" color="white" className="font-nfl text-nfl-heading">
            Platform Features
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-nfl-navy/50 backdrop-blur-sm rounded-lg p-6 border border-nfl-red/20 hover:border-nfl-red/40 transition-all duration-300"
            >
              <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
              <Typography color="white" className="font-nfl text-xl mb-2">
                {feature.title}
              </Typography>
              <Typography color="white" className="font-nfl-body opacity-80">
                {feature.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 