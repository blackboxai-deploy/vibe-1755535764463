"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function Hero() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleRideRequest = () => {
    console.log("Ride requested:", { pickup, destination });
    // Handle ride request logic here
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Go anywhere with{" "}
              <span className="text-green-400">RideShare</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Request a ride, hop in, and go. Choose your own adventure with reliable rides in minutes.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
              Ride
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold"
            >
              Drive
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold"
            >
              Business
            </Button>
          </div>

          {/* App Download */}
          <div className="flex items-center gap-4 pt-4">
            <span className="text-gray-400">Get the app:</span>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                App Store
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                Google Play
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content - Ride Request Form */}
        <div className="lg:justify-self-end w-full max-w-md">
          <Card className="p-6 bg-white shadow-2xl">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Request a ride now</h2>
              
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-400 rounded-full"></div>
                  <Input
                    placeholder="Pickup location"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="pl-10 py-6 text-lg"
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-black rounded-full"></div>
                  <Input
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="pl-10 py-6 text-lg"
                  />
                </div>
              </div>

              <Button 
                onClick={handleRideRequest}
                className="w-full bg-black text-white hover:bg-gray-800 py-6 text-lg font-semibold"
                disabled={!pickup || !destination}
              >
                Request now
              </Button>

              <div className="text-center">
                <Button variant="link" className="text-gray-600 hover:text-gray-800">
                  Schedule for later
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Hero Image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden xl:block">
        <img 
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2cea0d67-20a6-4540-966f-9404bac10142.png" 
          alt="Modern city street with cars and urban architecture at dusk"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
    </section>
  );
}