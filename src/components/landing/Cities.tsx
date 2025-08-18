"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const cities = [
  {
    name: "New York",
    country: "United States",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6ba93787-ef79-44a0-a56a-558058861c6b.png",
    rides: "2.5M+ rides",
  },
  {
    name: "Los Angeles",
    country: "United States", 
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/202d21f6-fc88-4bc8-a2d9-4ed14f8cef54.png",
    rides: "1.8M+ rides",
  },
  {
    name: "London",
    country: "United Kingdom",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1723cae0-b93a-46df-8957-ad5b70539b11.png",
    rides: "1.2M+ rides",
  },
  {
    name: "Paris",
    country: "France",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e8c86e77-1db4-4ad8-aac6-55fa6b29d1dc.png",
    rides: "900K+ rides",
  },
  {
    name: "Tokyo",
    country: "Japan",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9fe5b4f5-8b79-4b3d-ad88-1f0e1114bc95.png",
    rides: "1.5M+ rides",
  },
  {
    name: "Sydney",
    country: "Australia",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ae40d6c5-71a5-4fd7-b2c8-6a93bcc2ca1d.png",
    rides: "750K+ rides",
  },
  {
    name: "Toronto",
    country: "Canada",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2c25d80f-f907-41f2-923f-b983bf20d12e.png",
    rides: "650K+ rides",
  },
  {
    name: "Mumbai",
    country: "India",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fa3ee477-b594-4ec2-9da8-9b2a8179b9ae.png",
    rides: "2.1M+ rides",
  },
];

export default function Cities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    city.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            RideShare in your city
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're available in thousands of cities worldwide. Find RideShare in your city and start riding today.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <Input
              placeholder="Search for your city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="py-6 text-lg"
            />
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredCities.map((city, index) => (
            <Card 
              key={index} 
              className={`group cursor-pointer transition-all duration-300 border-2 hover:shadow-xl ${
                selectedCity === city.name ? 'border-green-500 shadow-lg' : 'border-transparent hover:border-gray-300'
              }`}
              onClick={() => setSelectedCity(selectedCity === city.name ? null : city.name)}
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={city.image}
                    alt={`${city.name}, ${city.country}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
                  <p className="text-gray-600">{city.country}</p>
                  <p className="text-sm text-green-600 font-medium">{city.rides}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No cities found matching "{searchTerm}"</p>
            <Button 
              variant="link" 
              onClick={() => setSearchTerm("")}
              className="text-black hover:text-gray-700 mt-2"
            >
              Clear search
            </Button>
          </div>
        )}

        {/* Global Expansion */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Don't see your city?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're expanding rapidly and always looking to bring RideShare to new cities. 
            Let us know where you'd like to see us next.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8">
              Request your city
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 hover:bg-gray-50 px-8"
            >
              Partner with us
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="text-3xl font-bold text-gray-900">10,000+</div>
            <div className="text-gray-600">Cities worldwide</div>
          </div>
          <div className="space-y-3">
            <div className="text-3xl font-bold text-gray-900">70+</div>
            <div className="text-gray-600">Countries served</div>
          </div>
          <div className="space-y-3">
            <div className="text-3xl font-bold text-gray-900">24/7</div>
            <div className="text-gray-600">Service availability</div>
          </div>
        </div>
      </div>
    </section>
  );
}