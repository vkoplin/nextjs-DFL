"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PageNav } from "@/components/page-nav";

const BLOG_POSTS = [
  {
    slug: "future-of-sports-ownership",
    title: "The Future of Sports Ownership",
    date: "March 15, 2024",
    excerpt: "How blockchain technology is revolutionizing the way we own and interact with sports teams.",
    category: "Technology",
    content: `
      The world of sports ownership is undergoing a revolutionary transformation, thanks to blockchain technology. 
      No longer is team ownership limited to billionaires and large corporations. Through tokenization and decentralized 
      ownership models, fans and investors can now own a piece of their favorite teams.

      ## The Power of Fractional Ownership
      
      Blockchain technology enables fractional ownership of sports teams, allowing fans to purchase and trade shares 
      in their favorite teams. This democratizes sports ownership and creates new opportunities for fan engagement.

      ## Benefits for Teams and Fans
      
      - Increased fan engagement through direct ownership
      - New revenue streams for teams
      - Transparent governance through blockchain
      - Global accessibility to team ownership
      
      The future of sports ownership is here, and it's more accessible than ever before.
    `
  },
  {
    slug: "dfl-platform-launch",
    title: "DFL Platform Launch: What to Expect",
    date: "March 10, 2024",
    excerpt: "A comprehensive guide to the features and opportunities available on the DFL platform.",
    category: "Platform",
    content: `
      The DFL platform is set to revolutionize how fans interact with their favorite sports teams. 
      Here's what you can expect from our upcoming launch.

      ## Key Features
      
      - Team share trading
      - Fan governance voting
      - Real-time performance tracking
      - Community rewards program
      
      ## Getting Started
      
      New users will be able to:
      1. Create an account
      2. Complete KYC verification
      3. Connect their wallet
      4. Start trading team shares
      
      Stay tuned for more updates as we approach our launch date!
    `
  },
  {
    slug: "team-share-valuation",
    title: "Understanding Team Share Valuation",
    date: "March 5, 2024",
    excerpt: "Learn how team shares are valued and what factors influence their market price.",
    category: "Education",
    content: `
      Understanding how team shares are valued is crucial for making informed investment decisions. 
      Here's a breakdown of the key factors that influence share prices.

      ## Valuation Factors
      
      ### Team Performance
      - Win/loss record
      - Championship potential
      - Player roster strength
      
      ### Financial Metrics
      - Revenue growth
      - Profit margins
      - Sponsorship deals
      
      ### Market Factors
      - Fan base size
      - Market location
      - Media rights value
      
      By understanding these factors, you can make more informed decisions about your team share investments.
    `
  },
  {
    slug: "community-governance",
    title: "Community Governance in Action",
    date: "February 28, 2024",
    excerpt: "See how DFL's DAO system empowers team owners to make important decisions.",
    category: "Governance",
    content: `
      DFL's decentralized governance system puts power in the hands of team owners. 
      Here's how our DAO (Decentralized Autonomous Organization) works.

      ## Governance Features
      
      ### Voting Rights
      - One share = one vote
      - Secure blockchain-based voting
      - Transparent results
      
      ### Decision Making
      - Team branding decisions
      - Revenue allocation
      - Community initiatives
      
      ### Benefits
      - Direct influence on team direction
      - Transparent decision-making
      - Community-driven development
      
      Join us in shaping the future of sports ownership through decentralized governance.
    `
  }
];

export default function BlogPost() {
  const params = useParams();
  const post = BLOG_POSTS.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-cyber-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post not found</h1>
          <Link
            href="/blog"
            className="text-cyber-blue hover:text-cyber-blue/80 transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-dark">
      <PageNav />
      
      {/* Header */}
      <div className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/50 to-cyber-dark" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 text-xs font-semibold text-cyber-blue bg-cyber-blue/10 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-400">{post.date}</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
        </motion.div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <Link
            href="/blog"
            className="text-cyber-blue hover:text-cyber-blue/80 transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
} 