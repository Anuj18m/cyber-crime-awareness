import React from 'react';
import { Shield, AlertTriangle, Users, TrendingUp } from 'lucide-react';
import TypingText from '../components/TypingText';
import InfiniteMarquee from '../components/InfiniteMarquee';
import ImageGrid from '../components/ImageGrid';
import TimelineSlider from '../components/TimelineSlider';

const HomePage: React.FC = () => {
  const stats = [
    { icon: AlertTriangle, value: '4.8M', label: 'Threats Blocked', color: 'text-red-400' },
    { icon: Shield, value: '99.9%', label: 'Success Rate', color: 'text-green-400' },
    { icon: Users, value: '250K+', label: 'Users Protected', color: 'text-blue-400' },
    { icon: TrendingUp, value: '24/7', label: 'Monitoring', color: 'text-yellow-400' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-green-400 mb-6">
              <TypingText text="CYBER SHIELD" speed={150} />
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-8">
              <TypingText 
                text="Protecting Digital Lives Through Awareness & Education" 
                speed={50}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="cyber-button bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Learning
            </button>
            <button className="cyber-button bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300">
              Report Threat
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${stat.color} bg-current/10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-green-400 rounded-full p-1">
            <div className="w-1 h-3 bg-green-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <InfiniteMarquee />

      {/* Threats Grid */}
      <ImageGrid />

      {/* Timeline */}
      <TimelineSlider />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-400 mb-6">
            Ready to Secure Your Digital Life?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who trust CyberShield for their security education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300">
              Get Started Now
            </button>
            <button className="cyber-button bg-gray-800 hover:bg-gray-700 text-green-400 px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;