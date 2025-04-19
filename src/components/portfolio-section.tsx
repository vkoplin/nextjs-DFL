"use client";

import { Typography } from "@material-tailwind/react";
import { ChartBarIcon, CurrencyDollarIcon, ArrowTrendingUpIcon, ClockIcon } from "@heroicons/react/24/solid";

const PORTFOLIO_DATA = {
  totalValue: "$125,000",
  totalShares: "1,250",
  performance: "+12.5%",
  recentTransactions: [
    {
      type: "Buy",
      team: "Eagles",
      shares: "50",
      price: "$5,000",
      date: "2024-03-15"
    },
    {
      type: "Sell",
      team: "Cowboys",
      shares: "25",
      price: "$2,500",
      date: "2024-03-14"
    },
    {
      type: "Buy",
      team: "Patriots",
      shares: "100",
      price: "$10,000",
      date: "2024-03-13"
    }
  ]
};

export function PortfolioSection() {
  return (
    <section className="py-16 bg-cyber-darker relative overflow-hidden">
      {/* Cyberpunk Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:2rem_2rem]" />
        <div className="absolute inset-0 bg-cyber-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Typography 
            variant="h6" 
            className="font-nfl mb-4 text-cyber-blue text-lg animate-neon-pulse"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            YOUR PORTFOLIO
          </Typography>
          <Typography 
            variant="h2" 
            className="font-nfl text-white text-4xl"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Track Your Investments
          </Typography>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber">
            <div className="flex items-center gap-3 mb-4">
              <CurrencyDollarIcon className="h-6 w-6 text-cyber-blue" />
              <Typography 
                variant="h6" 
                className="font-nfl text-white"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Total Value
              </Typography>
            </div>
            <Typography 
              variant="h3" 
              className="font-nfl text-white"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {PORTFOLIO_DATA.totalValue}
            </Typography>
          </div>

          <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber">
            <div className="flex items-center gap-3 mb-4">
              <ChartBarIcon className="h-6 w-6 text-cyber-blue" />
              <Typography 
                variant="h6" 
                className="font-nfl text-white"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Total Shares
              </Typography>
            </div>
            <Typography 
              variant="h3" 
              className="font-nfl text-white"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {PORTFOLIO_DATA.totalShares}
            </Typography>
          </div>

          <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber">
            <div className="flex items-center gap-3 mb-4">
              <ArrowTrendingUpIcon className="h-6 w-6 text-cyber-blue" />
              <Typography 
                variant="h6" 
                className="font-nfl text-white"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Performance
              </Typography>
            </div>
            <Typography 
              variant="h3" 
              className="font-nfl text-green-500"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {PORTFOLIO_DATA.performance}
            </Typography>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber">
          <div className="flex items-center gap-3 mb-6">
            <ClockIcon className="h-6 w-6 text-cyber-blue" />
            <Typography 
              variant="h5" 
              className="font-nfl text-white"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Recent Transactions
            </Typography>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cyber-blue/30">
                  <th className="text-left py-3 px-4 text-cyber-blue font-nfl">Type</th>
                  <th className="text-left py-3 px-4 text-cyber-blue font-nfl">Team</th>
                  <th className="text-left py-3 px-4 text-cyber-blue font-nfl">Shares</th>
                  <th className="text-left py-3 px-4 text-cyber-blue font-nfl">Price</th>
                  <th className="text-left py-3 px-4 text-cyber-blue font-nfl">Date</th>
                </tr>
              </thead>
              <tbody>
                {PORTFOLIO_DATA.recentTransactions.map((transaction, index) => (
                  <tr key={index} className="border-b border-cyber-blue/10">
                    <td className="py-3 px-4 text-white font-nfl-body">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        transaction.type === 'Buy' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-white font-nfl-body">{transaction.team}</td>
                    <td className="py-3 px-4 text-white font-nfl-body">{transaction.shares}</td>
                    <td className="py-3 px-4 text-white font-nfl-body">{transaction.price}</td>
                    <td className="py-3 px-4 text-white font-nfl-body">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection; 