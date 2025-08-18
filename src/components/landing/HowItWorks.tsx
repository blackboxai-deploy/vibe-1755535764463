const steps = [
  {
    number: "01",
    title: "Request",
    description: "Open the app and tell us where you want to go. We'll find the nearest driver to pick you up.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fc4ac4fb-4511-47df-848e-baacdb74f8cb.png",
  },
  {
    number: "02",
    title: "Match",
    description: "Get matched with a reliable driver in your area. Track them in real-time as they come to you.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dca5f96b-aa8a-42d4-8893-6a955f5c21ac.png",
  },
  {
    number: "03",
    title: "Ride",
    description: "Hop in and enjoy the ride. Pay automatically through the app when you arrive at your destination.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5d039c81-8313-425f-82fd-f584c3b4f5f7.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How RideShare works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting around has never been easier. Here's how it works in just three simple steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Image */}
              <div className="relative mb-8">
                <div className="aspect-[3/4] max-w-xs mx-auto overflow-hidden rounded-2xl bg-gray-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
              </div>

              {/* Step Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-32 left-1/2 w-24 h-0.5 bg-gray-300 transform translate-x-8"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-50 rounded-full px-8 py-4">
            <span className="text-gray-700 font-medium">Ready to get started?</span>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Request a ride
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-900">1B+</div>
            <div className="text-gray-600">Trips completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-900">10K+</div>
            <div className="text-gray-600">Cities worldwide</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-900">5M+</div>
            <div className="text-gray-600">Active drivers</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-gray-900">99%</div>
            <div className="text-gray-600">Satisfaction rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}