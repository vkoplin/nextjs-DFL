"use client";

import { useState } from 'react';
import { Button, Card, Typography, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, UserCircleIcon, ChatBubbleLeftIcon, CogIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

export default function GameInterface() {
  const [selectedTeam, setSelectedTeam] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Top Navigation Bar */}
      <div className="bg-cyber-blue/10 backdrop-blur-md p-4 fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <IconButton variant="text" className="text-white hover:bg-white/10" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <ArrowLeftIcon className="h-6 w-6" />
            </IconButton>
          </Link>
          <div className="flex gap-4">
            <IconButton variant="text" className="text-white hover:bg-white/10" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <UserCircleIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="text" className="text-white hover:bg-white/10" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <ChatBubbleLeftIcon className="h-6 w-6" />
            </IconButton>
            <IconButton variant="text" className="text-white hover:bg-white/10" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <CogIcon className="h-6 w-6" />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto pt-24 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Selection */}
          <Card className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            <Typography variant="h4" color="white" className="mb-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              Select Your Team
            </Typography>
            <div className="space-y-4">
              {['Team Alpha', 'Team Beta', 'Team Gamma'].map((team) => (
                <Button
                  key={team}
                  variant={selectedTeam === team ? "filled" : "outlined"}
                  color="white"
                  className="w-full"
                  onClick={() => setSelectedTeam(team)}
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {team}
                </Button>
              ))}
            </div>
          </Card>

          {/* Game Stats */}
          <Card className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 md:col-span-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            <Typography variant="h4" color="white" className="mb-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              Game Statistics
            </Typography>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Wins', value: '23' },
                { label: 'Losses', value: '7' },
                { label: 'Win Rate', value: '76.7%' },
                { label: 'Total Games', value: '30' },
                { label: 'Average Score', value: '28.5' },
                { label: 'League Rank', value: '#3' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/5 p-4 rounded-lg text-center">
                  <Typography variant="h6" color="white" className="mb-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                    {stat.label}
                  </Typography>
                  <Typography variant="h4" color="cyan" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                    {stat.value}
                  </Typography>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Matches */}
          <Card className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 md:col-span-3" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            <Typography variant="h4" color="white" className="mb-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              Recent Matches
            </Typography>
            <div className="space-y-4">
              {[
                { opponent: 'Team Delta', result: 'WIN', score: '24-17' },
                { opponent: 'Team Epsilon', result: 'WIN', score: '31-28' },
                { opponent: 'Team Zeta', result: 'LOSS', score: '21-24' },
              ].map((match, index) => (
                <div key={index} className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
                  <Typography variant="h6" color="white" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                    {match.opponent}
                  </Typography>
                  <div className="flex items-center gap-4">
                    <span className={match.result === 'WIN' ? 'text-green-500' : 'text-red-500'}>
                      {match.result}
                    </span>
                    <span>{match.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 