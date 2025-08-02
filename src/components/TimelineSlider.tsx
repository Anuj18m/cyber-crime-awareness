import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, AlertCircle, Shield, CheckCircle } from 'lucide-react';

const TimelineSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      id: 1,
      title: 'Corporate Data Breach',
      date: '2024-01-15',
      steps: [
        { icon: AlertCircle, title: 'Initial Attack', description: 'Phishing email sent to employees', status: 'danger' },
        { icon: Shield, title: 'Detection', description: 'Security team identified suspicious activity', status: 'warning' },
        { icon: Calendar, title: 'Investigation', description: 'Forensic analysis began immediately', status: 'info' },
        { icon: CheckCircle, title: 'Resolution', description: 'Breach contained and systems secured', status: 'success' }
      ]
    },
    {
      id: 2,
      title: 'Ransomware Attack',
      date: '2024-02-08',
      steps: [
        { icon: AlertCircle, title: 'Infection', description: 'Malicious attachment executed', status: 'danger' },
        { icon: Shield, title: 'Isolation', description: 'Affected systems quarantined', status: 'warning' },
        { icon: Calendar, title: 'Recovery', description: 'Data restoration from backups', status: 'info' },
        { icon: CheckCircle, title: 'Prevention', description: 'Enhanced security measures implemented', status: 'success' }
      ]
    },
    {
      id: 3,
      title: 'Social Engineering Scam',
      date: '2024-03-12',
      steps: [
        { icon: AlertCircle, title: 'Contact', description: 'Fraudulent call made to victim', status: 'danger' },
        { icon: Shield, title: 'Awareness', description: 'Victim recognized the scam attempt', status: 'warning' },
        { icon: Calendar, title: 'Reporting', description: 'Incident reported to authorities', status: 'info' },
        { icon: CheckCircle, title: 'Education', description: 'Team training conducted', status: 'success' }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'danger': return 'text-red-400 bg-red-900/30';
      case 'warning': return 'text-yellow-400 bg-yellow-900/30';
      case 'info': return 'text-blue-400 bg-blue-900/30';
      case 'success': return 'text-green-400 bg-green-900/30';
      default: return 'text-gray-400 bg-gray-900/30';
    }
  };

  return (
    <div className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-400 mb-4">
            Case Study Timeline
          </h2>
          <p className="text-gray-300 text-lg">
            Follow real cyber security incidents from detection to resolution
          </p>
        </div>

        <div className="relative">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={prevSlide}
              className="cyber-button flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-green-400 px-4 py-2 rounded-md transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-2">
                {cases[currentSlide].title}
              </h3>
              <p className="text-gray-400">
                {new Date(cases[currentSlide].date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

            <button
              onClick={nextSlide}
              className="cyber-button flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-green-400 px-4 py-2 rounded-md transition-all duration-300"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>
            
            <div className="space-y-12">
              {cases[currentSlide].steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(step.status)} border-2 border-current`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-5/12 ${
                    index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                  }`}>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-colors duration-300">
                      <h4 className="text-xl font-semibold text-green-400 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-green-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSlider;