import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowUpRight } from 'lucide-react';
import { cyberThreats } from '../data/cyberThreats';
import type { CyberThreat } from '../types/cyberThreat';

const ImageGrid: React.FC = () => {
  const getSeverityColor = (severity: CyberThreat['severity']) => {
    switch (severity) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-600';
      case 'medium': return 'bg-yellow-600';
      default: return 'bg-green-600';
    }
  };

  const getTrendColor = (trendLevel: CyberThreat['trendLevel']) => {
    switch (trendLevel.toLowerCase()) {
      case 'rising': return 'bg-rose-600';
      case 'very common': return 'bg-amber-600';
      case 'common': return 'bg-sky-600';
      default: return 'bg-green-600';
    }
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-400 mb-4">
            Recent Cyber Fraud Patterns in India
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Based on fraud techniques commonly reported by Indian users and cybercrime awareness campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cyberThreats.map((threat) => (
            <div
              key={threat.title}
              className="group relative bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={threat.image}
                  alt={threat.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-4 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-2 py-1 rounded-full text-[11px] font-semibold text-white ${getSeverityColor(threat.severity)}`}>
                        {threat.severity.toUpperCase()}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-[11px] font-semibold text-white ${getTrendColor(threat.trendLevel)}`}>
                        {threat.trendLevel.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{threat.title}</h3>
                    <p className="text-sm text-gray-200">{threat.caseSnapshot}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide mb-1">{threat.category}</div>
                    <h3 className="text-xl font-semibold text-green-400">
                      {threat.title}
                    </h3>
                  </div>
                  <Shield className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                </div>

                <div className="space-y-3 text-sm text-gray-300 mb-5">
                  <div className="flex justify-between gap-4"><span className="text-gray-500">Victim:</span><span className="text-right">{threat.victimProfile}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-gray-500">Platform:</span><span className="text-right">{threat.platform}</span></div>
                  <div className="flex justify-between gap-4"><span className="text-gray-500">Estimated Loss:</span><span className="text-right">{threat.estimatedLoss}</span></div>
                </div>

                <Link
                  to="/case-studies"
                  className="cyber-button w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;