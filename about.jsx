
import { Globe, Heart, Award, Users } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access to over 10,000 destinations across 150+ countries worldwide',
    },
    {
      icon: Heart,
      title: 'Passionate Team',
      description: 'Travel experts dedicated to creating unforgettable experiences',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in customer service and innovation',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Over 2 million happy travelers sharing their experiences',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About TravelBloom</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Your Gateway to Extraordinary Adventures
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Founded in 2015, TravelBloom emerged from a simple vision: to make world
                exploration accessible, enjoyable, and transformative for everyone. What started
                as a small team of passionate travelers has grown into a global community of
                adventure seekers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We believe that travel is more than just visiting new places—it's about
                connecting with diverse cultures, creating lasting memories, and discovering
                parts of yourself you never knew existed.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we're proud to have helped millions of travelers explore the world,
                one destination at a time.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Travel Experience"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed mb-8">
            To inspire and empower travelers to explore the world with confidence, curiosity,
            and respect for diverse cultures. We strive to create seamless, enriching travel
            experiences that broaden horizons and create lasting memories.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">2M+</div>
              <div className="text-lg">Happy Travelers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg">Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-lg">Destinations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
