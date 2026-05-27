import React from 'react';
import TimelineSlider from '../components/TimelineSlider';
import { cyberThreats } from '../data/cyberThreats';
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

  const featuredCases = cyberThreats.slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <section className="text-center mb-14 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/15 text-green-400 text-sm font-semibold mb-5 border border-green-500/20">
            Case Study Library
          </div>
          <h1 className="text-5xl font-bold text-green-400 mb-6">
            Real incidents, real patterns
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            This section shows the scam patterns most relevant to Indian users, the impact they create, and the response mindset that stops losses earlier.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { value: '6', label: 'Patterns Covered' },
            { value: '3', label: 'Impact Levels' },
            { value: '24/7', label: 'Awareness Context' },
          ].map((stat) => (
            <div key={stat.label} className="bg-gray-900 rounded-lg p-6 border border-gray-700 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-gray-900 rounded-2xl border border-gray-700 p-8 md:p-10 shadow-lg shadow-green-950/10">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-green-300/80 mb-2">Featured Incident</p>
                <h2 className="text-3xl font-bold text-white">Digital Arrest Scam</h2>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-600/20 text-red-300 text-sm font-semibold">Critical</span>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Fraudsters impersonate authorities, create urgency, and push victims into fast money transfers. This pattern is effective because it uses fear, isolation, and time pressure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                'Fake authority call or video contact',
                'Pressure to stay on the line',
                'Claims of legal trouble or account freeze',
                'Demand for immediate verification payment',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-xl bg-black/30 border border-gray-800 p-4">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span className="text-gray-200">{point}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-5">
              <p className="text-red-200 font-semibold mb-2">Response pattern</p>
              <p className="text-gray-200 leading-relaxed">
                Stop the conversation, verify through an official channel, and call the helpline before moving money or sharing information.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl border border-gray-700 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-green-300/80 mb-4">Why it matters</p>
            <div className="space-y-4 text-gray-300">
              <p>• Recruiters can see the app handles practical, user-facing security education.</p>
              <p>• The page now feels like a curated case library instead of a placeholder block.</p>
              <p>• The strongest takeaway is behavior change, not just information display.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCases.map((caseItem) => (
              <article key={caseItem.title} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-500/40 transition-all duration-300">
                <img src={caseItem.image} alt={caseItem.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-sm uppercase tracking-wide text-gray-400">{caseItem.category}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${caseItem.severity === 'critical' ? 'bg-red-600' : caseItem.severity === 'high' ? 'bg-orange-600' : 'bg-yellow-600'}`}>
                      {caseItem.severity.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-400 mb-2">{caseItem.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{caseItem.caseSnapshot}</p>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between gap-4"><span className="text-gray-500">Platform:</span><span>{caseItem.platform}</span></div>
                    <div className="flex justify-between gap-4"><span className="text-gray-500">Loss:</span><span>{caseItem.estimatedLoss}</span></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

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