"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageNav } from "@/components/page-nav";

const BLOG_POSTS = [
  {
    slug: "future-of-sports-ownership",
    title: "The Future of Sports Ownership",
    date: "March 15, 2024",
    excerpt: "How blockchain technology is revolutionizing the way we own and interact with sports teams.",
    category: "Technology"
  },
  {
    slug: "dfl-platform-launch",
    title: "DFL Platform Launch: What to Expect",
    date: "March 10, 2024",
    excerpt: "A comprehensive guide to the features and opportunities available on the DFL platform.",
    category: "Platform"
  },
  {
    slug: "team-share-valuation",
    title: "Understanding Team Share Valuation",
    date: "March 5, 2024",
    excerpt: "Learn how team shares are valued and what factors influence their market price.",
    category: "Education"
  },
  {
    slug: "community-governance",
    title: "Community Governance in Action",
    date: "February 28, 2024",
    excerpt: "See how DFL's DAO system empowers team owners to make important decisions.",
    category: "Governance"
  }
];

export default function Blog() {
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
              DFL Blog
            </Typography>
            <Typography
              variant="lead"
              className="text-gray-300"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Stay updated with the latest news, insights, and developments in the world of decentralized sports ownership.
            </Typography>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 text-xs font-semibold text-cyber-blue bg-cyber-blue/10 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              <Typography
                variant="h3"
                className="text-xl font-bold text-white mb-2"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {post.title}
              </Typography>
              <Typography
                className="text-gray-300 mb-4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {post.excerpt}
              </Typography>
              <Link
                href={`/blog/${post.slug}`}
                className="text-cyber-blue hover:text-cyber-blue/80 transition-colors"
              >
                Read more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 