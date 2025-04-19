"use client";

import { Typography, Input, Textarea, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { PageNav } from "@/components/page-nav";

const CONTACT_METHODS = [
  {
    title: "General Inquiries",
    email: "info@dfl.com",
    description: "For general questions about the platform and services"
  },
  {
    title: "Support",
    email: "support@dfl.com",
    description: "For technical support and account assistance"
  },
  {
    title: "Partnerships",
    email: "partnerships@dfl.com",
    description: "For business development and partnership opportunities"
  }
];

export default function Contact() {
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
              Contact Us
            </Typography>
            <Typography
              variant="lead"
              className="text-gray-300"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Get in touch with our team
            </Typography>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-8 border border-cyber-blue/30 shadow-cyber"
          >
            <Typography
              variant="h2"
              className="text-2xl font-bold text-white mb-6"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Send us a Message
            </Typography>
            <form className="space-y-6">
              <div>
                <Input
                  label="Name"
                  className="bg-cyber-dark/50 border-cyber-blue/30 text-white"
                  crossOrigin=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                />
              </div>
              <div>
                <Input
                  label="Email"
                  type="email"
                  className="bg-cyber-dark/50 border-cyber-blue/30 text-white"
                  crossOrigin=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                />
              </div>
              <div>
                <Input
                  label="Subject"
                  className="bg-cyber-dark/50 border-cyber-blue/30 text-white"
                  crossOrigin=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                />
              </div>
              <div>
                <Textarea
                  label="Message"
                  className="bg-cyber-dark/50 border-cyber-blue/30 text-white"
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                />
              </div>
              <Button
                className="bg-cyber-blue text-white hover:bg-cyber-blue/80"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {CONTACT_METHODS.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber"
              >
                <Typography
                  variant="h3"
                  className="text-xl font-bold text-white mb-2"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {method.title}
                </Typography>
                <a
                  href={`mailto:${method.email}`}
                  className="text-cyber-blue hover:text-cyber-blue/80 transition-colors"
                >
                  {method.email}
                </a>
                <Typography
                  className="text-gray-300 mt-2"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  {method.description}
                </Typography>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-cyber-dark/50 backdrop-blur-sm rounded-lg p-6 border border-cyber-blue/30 shadow-cyber"
            >
              <Typography
                variant="h3"
                className="text-xl font-bold text-white mb-4"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Follow Us
              </Typography>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/dfl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-blue hover:text-cyber-blue/80 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://discord.gg/dfl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-blue hover:text-cyber-blue/80 transition-colors"
                >
                  Discord
                </a>
                <a
                  href="https://github.com/dfl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-blue hover:text-cyber-blue/80 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 