/** @type {import('next').NextConfig} */
const nextConfig = {}

// Configuration object tells the next-pwa plugin 
const withPWA = require("next-pwa")({
    dest: "public", // Destination directory for the PWA files
    register: false, // Register the PWA service worker
  });
  
// Export the combined configuration for Next.js with PWA support
module.exports = withPWA(nextConfig);
