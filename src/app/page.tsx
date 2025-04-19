"use client";

// components
import { Navbar } from "@/components";
import Footer from "@/components/footer";
import { Leaderboard } from "@/components/leaderboard";
import { FeatureShowcase } from "@/components/feature-showcase";
import { TeamsSection } from "@/components/teams-section";
import { EventContent } from "./event-content";
import { SponsoredBy } from "./sponsored-by";
import FAQ from "./faq";
import Hero from "./hero";
import { PortfolioSection } from "@/components/portfolio-section";

// sections
import AboutEvent from "./about-event";
import OurStats from "./our-stats";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureShowcase />
      <TeamsSection />
      <EventContent />
      <FAQ />
      <SponsoredBy />
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <OurStats />
      <div id="leaderboard">
        <Leaderboard />
      </div>
      <Footer />
    </>
  );
}
