"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { PageNav } from "@/components/page-nav";

const JOB_LISTINGS = [
  {
    title: "Blockchain Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our team to build and maintain our Solana-based platform. Experience with Rust and Solana development required."
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Work on our Next.js frontend, implementing new features and improving user experience. Strong React and TypeScript skills required."
  },
  {
    title: "Community Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Engage with our community, manage social media, and organize events. Experience in crypto/blockchain communities preferred."
  },
  {
    title: "Business Development",
    department: "Business",
    location: "Remote",
    type: "Full-time",
    description: "Identify and develop partnerships with sports teams and organizations. Strong network in sports industry preferred."
  }
];

export default function Careers() {
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
              Join Our Team
            </Typography>
            <Typography
              variant="lead"
              className="text-gray-300"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Be part of the future of sports ownership and blockchain technology.
            </Typography>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {JOB_LISTINGS.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <Typography
                    variant="h3"
                    className="text-xl font-bold text-white mb-2"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    {job.title}
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-cyber-blue text-sm">{job.department}</span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm">{job.location}</span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm">{job.type}</span>
                  </div>
                </div>
                <button className="bg-cyber-blue text-white px-4 py-2 rounded-lg hover:bg-cyber-blue/80 transition-colors">
                  Apply Now
                </button>
              </div>
              <Typography
                className="text-gray-300 mt-4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {job.description}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 