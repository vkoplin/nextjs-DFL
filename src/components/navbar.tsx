"use client";

import React from "react";
import {
  ChartBarIcon,
  WalletIcon,
  TrophyIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={href}
        className="flex items-center gap-2 font-nfl hover:text-cyber-blue transition-colors"
      >
        {children}
      </a>
    </motion.li>
  );
}

const NAV_MENU = [
  {
    name: "Market",
    icon: ChartBarIcon,
    href: "#market"
  },
  {
    name: "Portfolio",
    icon: WalletIcon,
    href: "#portfolio"
  },
  {
    name: "Leaderboard",
    icon: TrophyIcon,
    href: "#leaderboard"
  },
];

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Support", href: "/support" },
  { name: "About", href: "#about" },
  { name: "Teams", href: "#teams" },
  { name: "Roadmap", href: "#roadmap" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolling 
          ? "bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-blue/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className={`text-lg font-bold ${
            isScrolling ? "text-white" : "text-white"
          }`}
        >
          DFL
        </motion.h1>
        <ul
          className={`ml-10 hidden items-center gap-8 lg:flex ${
            isScrolling ? "text-white" : "text-white"
          }`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-full px-4 py-2 font-medium transition-colors ${
              isScrolling
                ? "text-white hover:bg-cyber-blue/20"
                : "text-white hover:bg-cyber-blue/20"
            }`}
          >
            Sign In
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-cyber-blue px-4 py-2 font-medium text-white transition-colors hover:bg-cyber-blue/90"
          >
            Connect Wallet
          </motion.button>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleOpen}
          className={`ml-auto inline-block rounded-lg p-2 lg:hidden ${
            isScrolling ? "text-white" : "text-white"
          }`}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </motion.button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="container mx-auto mt-4 rounded-lg bg-cyber-dark/95 backdrop-blur-md border border-cyber-blue/20 px-6 py-5 lg:hidden"
          >
            <ul className="flex flex-col gap-4 text-white">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem key={name} href={href}>
                  <Icon className="h-5 w-5" />
                  {name}
                </NavItem>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full px-4 py-2 font-medium text-white transition-colors hover:bg-cyber-blue/20"
              >
                Sign In
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-cyber-blue px-4 py-2 font-medium text-white transition-colors hover:bg-cyber-blue/90"
              >
                Connect Wallet
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
