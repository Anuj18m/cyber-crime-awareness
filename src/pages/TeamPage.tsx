import React from 'react';
import { Shield, Award, Github, Linkedin, Twitter } from 'lucide-react';

const TeamPage: React.FC = () => {
  const team = [
    {
      name: 'Alex Chen',
      role: 'Lead Security Researcher',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Penetration Testing, Threat Analysis',
      certifications: ['CISSP', 'CEH', 'OSCP']
    },
    {
      name: 'Sarah Johnson',
      role: 'Cybersecurity Analyst',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Incident Response, Digital Forensics',
      certifications: ['GCIH', 'GCFA', 'CISSP']
    },
    {
      name: 'Mike Rodriguez',
      role: 'Security Engineer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Network Security, Malware Analysis',
      certifications: ['CCSP', 'SANS', 'CISM']
    },
    {
      name: 'Emily Zhang',
      role: 'Security Educator',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      expertise: 'Security Awareness, Training Programs',
      certifications: ['CISSP', 'CISA', 'CompTIA Security+']
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-400 mb-6">
            Our Security Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the cybersecurity experts dedicated to keeping you safe online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-green-400">
                    <Shield className="w-16 h-16 mx-auto mb-2" />
                    <div className="text-xs font-mono">SECURITY EXPERT</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {member.role}
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  {member.expertise}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Award className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-semibold">Certifications</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {member.certifications.map((cert, certIndex) => (
                      <span
                        key={certIndex}
                        className="bg-green-600/20 text-green-400 text-xs px-2 py-1 rounded"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="text-gray-400 hover:text-green-400 transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-green-400 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-green-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;