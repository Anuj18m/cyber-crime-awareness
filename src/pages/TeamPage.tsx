import React from 'react';
import { AlertTriangle, BookOpen, CheckCircle, ExternalLink, Phone, Shield } from 'lucide-react';

const resources = [
  {
    title: 'National Cyber Crime Reporting Portal',
    description: 'Official platform for reporting cybercrime incidents in India.',
    href: 'https://cybercrime.gov.in/',
    icon: Shield,
  },
  {
    title: 'CERT-In',
    description: 'National incident response organization for cybersecurity issues.',
    href: 'https://www.cert-in.org.in/',
    icon: AlertTriangle,
  },
  {
    title: 'Digital Safety Resources',
    description: 'Guides, advisories, and awareness material for online safety.',
    href: 'https://www.mygov.in/',
    icon: BookOpen,
  },
];

const checklist = [
  'Never share OTP',
  'Verify KYC requests independently',
  'Enable Two-Factor Authentication',
  'Avoid unknown QR codes',
  'Use strong unique passwords',
  'Verify customer care numbers',
  'Review app permissions',
  'Monitor bank transactions regularly',
];

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        <section className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/15 text-green-400 text-sm font-semibold mb-6 border border-green-500/20">
            Cyber Safety Resources
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-green-400 mb-6">
            Our Mission
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Cybercrime continues to affect students, professionals, senior citizens, and small businesses across India.
            This platform was created to help users understand common fraud techniques, identify warning signs early,
            and take practical steps to protect themselves online.
          </p>
          <p className="text-lg text-gray-400 mt-6 leading-relaxed">
            Our goal is awareness, prevention, and informed reporting.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2 bg-gray-900 border border-gray-700 rounded-2xl p-8 md:p-10 shadow-lg shadow-green-950/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/15 flex items-center justify-center border border-red-500/20">
                <Phone className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-red-300/80">Emergency Help</p>
                <h2 className="text-3xl font-bold text-white mt-1">Need Immediate Help?</h2>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-3xl">
              If you have lost money or shared sensitive information, act quickly to reduce further damage.
              Contact your bank, preserve evidence, and report the incident without delay.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Contact your bank immediately',
                'Block suspicious accounts or cards',
                'Preserve screenshots and transaction details',
                'Change affected passwords',
                'Report the incident without delay',
              ].map((step) => (
                <div key={step} className="flex items-start gap-3 rounded-xl bg-black/30 border border-gray-800 p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-gray-200">{step}</span>
                </div>
              ))}
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-red-200 text-sm uppercase tracking-[0.2em] mb-2">Cyber Crime Helpline</p>
                <p className="text-5xl md:text-6xl font-black text-white leading-none">1930</p>
              </div>
              <p className="text-gray-200 max-w-xl text-lg leading-relaxed">
                Report financial cyber fraud as soon as possible to improve the chance of stopping further losses.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-700 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-green-300/80 mb-3">Reporting Guidance</p>
              <h2 className="text-2xl font-bold text-white mb-4">What to do next</h2>
              <ul className="space-y-4 text-gray-300">
                <li>• Keep the fraud message, number, or link untouched for reference</li>
                <li>• Note the time, amount, and platform involved</li>
                <li>• Avoid deleting screenshots or transaction IDs</li>
                <li>• Use official reporting channels only</li>
              </ul>
            </div>
            <div className="mt-8 rounded-xl bg-black/30 border border-gray-800 p-4">
              <p className="text-sm text-gray-400 mb-1">Quick reminder</p>
              <p className="text-gray-200">
                The fastest response is usually the one that preserves evidence and alerts the bank and authorities together.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-7 h-7 text-green-400" />
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-green-300/80">Reporting Resources</p>
              <h2 className="text-3xl font-bold text-white mt-1">Useful resources for Indian users</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noreferrer"
                className="group bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-green-500/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-green-600/15 border border-green-500/20 flex items-center justify-center mb-5">
                  <resource.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-3 group-hover:text-green-300 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-5">
                  {resource.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Open resource
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-7 h-7 text-green-400" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-green-300/80">Cyber Safety Checklist</p>
                <h2 className="text-3xl font-bold text-white mt-1">Simple habits that reduce risk</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-black/30 border border-gray-800 p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/10 border border-green-500/20 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-7 h-7 text-amber-400" />
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-amber-200/80">Awareness Note</p>
                <h2 className="text-3xl font-bold text-white mt-1">Stay alert, stay verified</h2>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Most scams succeed when they create urgency, confusion, or secrecy. Slow down, verify independently,
              and use official contact channels before taking action.
            </p>

            <div className="rounded-xl bg-black/25 border border-gray-800 p-5">
              <p className="text-gray-200 font-semibold mb-2">Best practice</p>
              <p className="text-gray-300 leading-relaxed">
                If a message asks you to act immediately, move the conversation to an official app, a verified helpline,
                or the company’s official website before responding.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TeamPage;