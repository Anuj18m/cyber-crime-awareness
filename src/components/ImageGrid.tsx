import React from 'react';
import { Shield, AlertTriangle, Mail, Wifi, CreditCard, Smartphone } from 'lucide-react';

const ImageGrid: React.FC = () => {
  const threats = [
    {
      id: 1,
      title: 'Phishing Attacks',
      description: 'Email scams targeting your personal information',
      icon: Mail,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      severity: 'high'
    },
    {
      id: 2,
      title: 'Malware',
      description: 'Malicious software that can damage your system',
      icon: AlertTriangle,
      image: 'https://images.pexels.com/photos/5240544/pexels-photo-5240544.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      severity: 'critical'
    },
    {
      id: 3,
      title: 'Wi-Fi Threats',
      description: 'Unsecured networks exposing your data',
      icon: Wifi,
      image: 'https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      severity: 'medium'
    },
    {
      id: 4,
      title: 'Credit Card Fraud',
      description: 'Unauthorized use of your financial information',
      icon: CreditCard,
      image: 'https://images.pexels.com/photos/8370747/pexels-photo-8370747.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      severity: 'high'
    },
    {
      id: 5,
      title: 'Mobile Security',
      description: 'Threats targeting smartphones and tablets',
      icon: Smartphone,
      image: 'https://images.pexels.com/photos/4100420/pexels-photo-4100420.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      severity: 'medium'
    },
    {
      id: 6,
      title: 'Social Engineering',
      description: 'Psychological manipulation to gain access',
      icon: Shield,
      image: 'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      severity: 'high'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-600';
      case 'medium': return 'bg-yellow-600';
      default: return 'bg-green-600';
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-400 mb-4">
            Common Cyber Threats
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Learn about the most prevalent cyber threats and how to protect yourself
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {threats.map((threat) => (
            <div
              key={threat.id}
              className="group relative bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={threat.image}
                  alt={threat.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <threat.icon className="w-12 h-12 mx-auto mb-2" />
                    <h3 className="text-xl font-bold mb-2">{threat.title}</h3>
                    <p className="text-sm">{threat.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-green-400">
                    {threat.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getSeverityColor(threat.severity)}`}>
                    {threat.severity.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  {threat.description}
                </p>
                <button className="cyber-button w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;