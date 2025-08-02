import React from 'react';
import { Book, Video, FileText, Award } from 'lucide-react';

const LearnPage: React.FC = () => {
  const resources = [
    {
      icon: Book,
      title: 'Security Fundamentals',
      description: 'Learn the basics of cybersecurity and online safety',
      lessons: 12,
      duration: '2 hours'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Watch expert-led tutorials on various security topics',
      lessons: 25,
      duration: '5 hours'
    },
    {
      icon: FileText,
      title: 'Best Practices',
      description: 'Comprehensive guides on security best practices',
      lessons: 8,
      duration: '1 hour'
    },
    {
      icon: Award,
      title: 'Certification Track',
      description: 'Earn certificates by completing security courses',
      lessons: 20,
      duration: '10 hours'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-400 mb-6">
            Learn Cybersecurity
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive resources to help you understand and protect against cyber threats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-green-500/50"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mb-6">
                <resource.icon className="w-8 h-8 text-green-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-green-400 mb-3">
                {resource.title}
              </h3>
              
              <p className="text-gray-300 mb-4">
                {resource.description}
              </p>
              
              <div className="flex justify-between text-sm text-gray-400 mb-6">
                <span>{resource.lessons} lessons</span>
                <span>{resource.duration}</span>
              </div>
              
              <button className="cyber-button w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-all duration-300">
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnPage;