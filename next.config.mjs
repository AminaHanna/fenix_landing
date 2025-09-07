/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        { source: "/private-jet", destination: "/charters" },
        { source: "/airtaxi", destination: "/charters" },
        { source: "/airambulance", destination: "/charters" },
        { source: "/cargo", destination: "/charters" },
        { source: "/helicopter", destination: "/charters" },
      ];
    },
  };
  
  export default nextConfig;
  