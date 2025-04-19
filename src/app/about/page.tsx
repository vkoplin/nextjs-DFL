"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { PageNav } from "@/components/page-nav";

const ABOUT_SECTIONS = [
  {
    title: "Our Mission",
    description: "We're revolutionizing sports ownership by leveraging blockchain technology to create a more accessible and transparent market for team ownership. Our platform enables fans and investors to own a piece of their favorite teams through fractional ownership.",
    icon: "🎯"
  },
  {
    title: "Our Vision",
    description: "We envision a future where sports ownership is democratized, allowing fans to have a real stake in their favorite teams. By combining blockchain technology with sports, we're creating new opportunities for fan engagement and team financing.",
    icon: "🚀"
  },
  {
    title: "Our Technology",
    description: "Built on Solana blockchain, our platform offers fast, secure, and cost-effective transactions. We utilize smart contracts to ensure transparent ownership and automated dividend distribution.",
    icon: "💻"
  }
];

const TEAM_MEMBERS = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    bio: "Former professional athlete turned tech entrepreneur with a passion for blockchain and sports.",
    image: "/images/team/john.jpg"
  },
  {
    name: "Jane Smith",
    role: "CTO",
    bio: "Blockchain expert with extensive experience in developing decentralized applications.",
    image: "/images/team/jane.jpg"
  },
  {
    name: "Mike Johnson",
    role: "Head of Sports Relations",
    bio: "Sports industry veteran with deep connections in professional sports organizations.",
    image: "/images/team/mike.jpg"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <PageNav />
      
      {/* Header */}
      <div className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/50 to-cyber-dark" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              className="text-4xl font-bold text-white mb-4"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              About Us
            </Typography>
            <Typography
              variant="lead"
              className="text-gray-300"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Building the future of sports ownership through blockchain technology
            </Typography>
          </motion.div>
        </div>
      </div>

      {/* About Sections */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_SECTIONS.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber"
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <Typography
                variant="h3"
                className="text-xl font-bold text-white mb-4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {section.title}
              </Typography>
              <Typography
                className="text-gray-300"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {section.description}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Typography
          variant="h2"
          className="text-2xl font-bold text-white mb-8 text-center"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Our Team
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <Typography
                variant="h3"
                className="text-xl font-bold text-white mb-2"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {member.name}
              </Typography>
              <Typography
                className="text-cyber-blue mb-4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {member.role}
              </Typography>
              <Typography
                className="text-gray-300"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {member.bio}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 