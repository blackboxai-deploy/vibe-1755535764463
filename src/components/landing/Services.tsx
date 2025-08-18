import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Ride",
    description: "Go anywhere with RideShare. Request a ride, hop in, and go.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/905b5cf7-df6a-472d-b9eb-44817a2a03de.png",
    features: ["Always available", "Upfront pricing", "Safe and reliable"],
  },
  {
    title: "Drive",
    description: "Make money driving on the platform with the largest network of active riders.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/57516d0e-ecc2-4e40-a473-38106eede91b.png",
    features: ["Flexible schedule", "Weekly earnings", "Driver support"],
  },
  {
    title: "Deliver",
    description: "Deliver food and more. Sign up and start earning in minutes.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/68bb7735-ad76-4c2a-ad02-3a583504aae4.png",
    features: ["Instant pay", "Flexible hours", "Multiple delivery options"],
  },
  {
    title: "Business",
    description: "Transform the way your company moves and feeds its people.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/62030a58-8469-40e1-9d51-37f7e07ced86.png",
    features: ["Central billing", "Employee management", "Analytics dashboard"],
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The RideShare you know, and so much more
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From getting to your destination to earning money on your schedule, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 border-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    Learn more
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-black rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join millions of people who rely on RideShare to get around, earn money, and make the most of their time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-6">
                Sign up to ride
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-6"
              >
                Sign up to drive
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}