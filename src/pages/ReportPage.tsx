import React, { useState } from 'react';
import { AlertTriangle, Send, Shield } from 'lucide-react';

const ReportPage: React.FC = () => {
  const [formData, setFormData] = useState({
    threatType: '',
    description: '',
    severity: '',
    contact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Report submitted:', formData);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-red-400" />
          </div>
          <h1 className="text-5xl font-bold text-red-400 mb-6">
            Report a Threat
          </h1>
          <p className="text-xl text-gray-300">
            Help us keep the community safe by reporting suspicious activities
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-green-400 font-semibold mb-2">
                Threat Type
              </label>
              <select
                value={formData.threatType}
                onChange={(e) => setFormData({...formData, threatType: e.target.value})}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                required
              >
                <option value="">Select threat type</option>
                <option value="phishing">Phishing Email</option>
                <option value="malware">Malware</option>
                <option value="scam">Online Scam</option>
                <option value="identity-theft">Identity Theft</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-green-400 font-semibold mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={5}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                placeholder="Describe the threat in detail..."
                required
              />
            </div>

            <div>
              <label className="block text-green-400 font-semibold mb-2">
                Severity Level
              </label>
              <select
                value={formData.severity}
                onChange={(e) => setFormData({...formData, severity: e.target.value})}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                required
              >
                <option value="">Select severity</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>

            <div>
              <label className="block text-green-400 font-semibold mb-2">
                Contact Information (Optional)
              </label>
              <input
                type="email"
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>

            <button
              type="submit"
              className="cyber-button w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-md text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Submit Report</span>
            </button>
          </form>
        </div>

        <div className="mt-12 bg-green-900/20 border border-green-500/30 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-semibold text-green-400">Privacy Notice</h3>
          </div>
          <p className="text-gray-300">
            Your report will be handled confidentially. We may contact you for additional information if needed.
            All data is encrypted and stored securely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;