import React from 'react';
import TimelineSlider from '../components/TimelineSlider';
import { FileText, Clock, TrendingUp, Users } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const highlights = [
    {
      icon: FileText,
      title: 'Detailed Analysis',
      description: 'In-depth breakdown of each security incident'
    },
    {
      icon: Clock,
      title: 'Timeline Views',
      description: 'Step-by-step progression from attack to resolution'
    },
    {
      icon: TrendingUp,
      title: 'Lessons Learned',
      description: 'Key takeaways and prevention strategies'
    },
    {
      icon: Users,
      title: 'Team Response',
      description: 'How security teams handled each situation'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-400 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world cybersecurity incidents and how they were handled
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center bg-gray-900 rounded-lg p-6 border border-gray-700"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mb-4 mx-auto">
                <highlight.icon className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-300">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <TimelineSlider />
      </div>
    </div>
  );
};

export default CaseStudiesPage;