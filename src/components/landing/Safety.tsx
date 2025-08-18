import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const safetyFeatures = [
  {
    title: "GPS Tracking",
    description: "Your trip is tracked from start to finish, and you can share your location with trusted contacts.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/49a1dacf-124f-4bb7-8365-3441f3c634e5.png",
  },
  {
    title: "Driver Background Checks",
    description: "All drivers undergo comprehensive background checks and vehicle inspections before joining our platform.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1274dd21-b4e4-4e5b-a17a-521135d70410.png",
  },
  {
    title: "24/7 Support",
    description: "Our dedicated safety team is available around the clock to assist you with any concerns or emergencies.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e691fd89-d89a-4e99-b49c-6ad863c862d5.png",
  },
  {
    title: "In-App Emergency",
    description: "Quick access to emergency services and safety tools directly from the app when you need them most.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cb3e79f5-4edb-4a37-a348-17ed4a519e7f.png",
  },
];

const additionalFeatures = [
  {
    icon: "🛡️",
    title: "Insurance Coverage",
    description: "Every trip is covered by comprehensive insurance for your peace of mind.",
  },
  {
    icon: "⭐",
    title: "Driver Ratings",
    description: "Rate your driver and see ratings from other riders to ensure quality service.",
  },
  {
    icon: "📱",
    title: "Trip Sharing",
    description: "Share your trip details with friends and family so they know you're safe.",
  },
  {
    icon: "🔒",
    title: "Secure Payments",
    description: "All payments are processed securely with industry-standard encryption.",
  },
];

export default function Safety() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your safety is our priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing a safe, reliable experience for every rider and driver on our platform.
          </p>
        </div>

        {/* Main Safety Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {safetyFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Safety Stats */}
        <div className="bg-black rounded-2xl p-8 lg:p-12 text-white mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl font-bold text-green-400">99.9%</div>
              <div className="text-gray-300">Trips completed safely</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-green-400">100%</div>
              <div className="text-gray-300">Background checked drivers</div>
            </div>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-green-400">24/7</div>
              <div className="text-gray-300">Safety support available</div>
            </div>
          </div>
        </div>

        {/* Safety Commitment */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Committed to continuous improvement
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We're constantly investing in new technologies and safety measures to make every trip 
            as safe as possible. Our safety standards exceed industry requirements because your 
            well-being matters most.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8">
              Learn more about safety
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 hover:bg-gray-50 px-8"
            >
              Safety guidelines
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}