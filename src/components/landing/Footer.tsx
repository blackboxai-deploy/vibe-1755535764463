"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Company: [
    "About us",
    "How it works",
    "Careers",
    "Press",
    "Blog",
    "Investor relations",
  ],
  Riders: [
    "Ride",
    "Drive & deliver",
    "How to ride",
    "Cities",
    "Safety",
    "Accessibility",
  ],
  Business: [
    "RideShare for Business",
    "RideShare Freight",
    "Enterprise",
    "Airports",
    "Healthcare",
    "Education",
  ],
  Support: [
    "Help center",
    "Contact us",
    "Safety guidelines",
    "Lost items",
    "Insurance",
    "Community guidelines",
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
    // Handle newsletter signup logic here
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Stay in the know</h3>
            <p className="text-gray-400 mb-8 text-lg">
              Get the latest news, updates, and offers from RideShare delivered straight to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-gray-900 border-gray-700 text-white placeholder-gray-400 py-6"
                required
              />
              <Button 
                type="submit"
                className="bg-white text-black hover:bg-gray-100 px-8 py-6 font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">RideShare</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Moving people and things in ways that matter. Available in thousands of cities worldwide.
            </p>
            
            {/* App Download Links */}
            <div className="space-y-3">
              <p className="text-sm text-gray-400">Download the app</p>
              <div className="flex flex-col gap-2">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800 justify-start">
                  App Store
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800 justify-start">
                  Google Play
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <button className="text-gray-400 hover:text-white transition-colors text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media and Additional Links */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Social Media */}
            <div className="flex items-center gap-6">
              <span className="text-gray-400">Follow us:</span>
              <div className="flex gap-4">
                {["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"].map((platform) => (
                  <button
                    key={platform}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>

            {/* Language and Region */}
            <div className="flex items-center gap-6">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                🌐 English (US)
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                📍 New York
              </Button>
            </div>
          </div>
        </div>

        {/* Legal and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Cookie Policy</button>
              <button className="hover:text-white transition-colors">Accessibility</button>
              <button className="hover:text-white transition-colors">Do not sell my info</button>
            </div>
            
            <div className="text-sm text-gray-400">
              © 2024 RideShare Technologies Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}