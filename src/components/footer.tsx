"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { XIcon, DiscordIcon, TelegramIcon, GithubIcon } from "./icons";

const FOOTER_LINKS = [
  {
    title: "Platform",
    links: [
      { name: "Trading Teams", href: "#market" },
      { name: "Marketplace", href: "#market" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Analytics", href: "#leaderboard" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: "/documentation" },
      { name: "Whitepaper", href: "/whitepaper" },
      { name: "Blog", href: "/blog" },
      { name: "Support", href: "/support" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Partners", href: "/partners" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const SOCIAL_LINKS = [
  { name: "X", href: "https://twitter.com/dfl", icon: XIcon },
  { name: "Discord", href: "https://discord.gg/dfl", icon: DiscordIcon },
  { name: "Telegram", href: "https://t.me/dfl", icon: TelegramIcon },
  { name: "GitHub", href: "https://github.com/dfl", icon: GithubIcon },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cyber-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark/50 to-cyber-dark" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-cyber-blue">DFL</h2>
            <p className="text-sm text-gray-300">
              Decentralized trading platform for professional traders and investors.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyber-blue transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-cyber-blue uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-cyber-blue transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12 border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} DFL. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-300 hover:text-cyber-blue transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-300 hover:text-cyber-blue transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
