import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, FileText, TrendingUp, Users } from 'lucide-react';
import TimelineSlider from '../components/TimelineSlider';

type CaseStudy = {
  id: string;
  title: string;
  victimProfile: string;
  loss: string;
  category: string;
  summary: string;
  howItWorked: string[];
  warningSigns: string[];
  victimCouldHaveDone: string[];
  preventionTips: string[];
  keyTakeaway: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 'digital-arrest',
    title: 'Digital Arrest Scam',
    victimProfile: 'IT Professional',
    loss: '₹3.2 Lakhs',
    category: 'Impersonation Scam',
    summary:
      "A caller posing as law enforcement claimed the victim's identity was linked to a criminal investigation and demanded immediate cooperation over video call.",
    howItWorked: [
      'The caller used official-sounding language and kept the victim on the line.',
      'The victim was told to treat the call as confidential and avoid contacting family or the bank.',
      'Multiple transfers were requested as part of a fake verification process.',
    ],
    warningSigns: [
      'Threatening authority language',
      'Pressure to stay on a live call',
      'Urgent transfer requests for verification',
      'Requests to keep the situation secret',
    ],
    victimCouldHaveDone: [
      'Hung up and independently called the official helpline.',
      'Contacted the bank before sending any money.',
      'Shared the incident with family or a trusted contact immediately.',
    ],
    preventionTips: [
      'Government agencies do not request verification payments.',
      'Never move money under pressure from an unknown caller.',
      'Report immediately to 1930 and preserve call details.',
    ],
    keyTakeaway:
      'Real authorities verify identity through official channels; they do not demand emergency transfers to clear your name.',
  },
  {
    id: 'upi-refund',
    title: 'UPI Refund Scam',
    victimProfile: 'Online Shopper',
    loss: '₹18,000',
    category: 'Payment Fraud',
    summary:
      'The victim was told a refund was pending and was nudged into approving a collect request disguised as a verification step.',
    howItWorked: [
      'The fraudster claimed to be from a marketplace or wallet support team.',
      'A collect request was framed as a required refund verification action.',
      'The victim approved the transaction believing money would come back.',
    ],
    warningSigns: [
      'Refund promised through a collect request',
      'Urgent payment app prompts',
      'Instructions to scan or approve without checking',
      'Support chat that pushes quick decisions',
    ],
    victimCouldHaveDone: [
      'Verified the refund inside the official app or website.',
      'Rejected collect requests from unknown sources.',
      'Checked transaction history before acting on a message.',
    ],
    preventionTips: [
      'Refunds should not require you to send money back first.',
      'Only trust refund information shown in the official app.',
      'Pause and verify before approving any UPI prompt.',
    ],
    keyTakeaway:
      'A refund claim becomes suspicious the moment someone asks you to approve a collect request or scan a code.',
  },
  {
    id: 'fake-kyc',
    title: 'Fake KYC Update Scam',
    victimProfile: 'Bank Customer',
    loss: '₹45,000',
    category: 'Account Takeover',
    summary:
      'A message warned that the account would be blocked unless the victim completed a fake KYC update through a spoofed link.',
    howItWorked: [
      'The message created urgency by claiming the account would be suspended.',
      'The spoofed page mimicked a bank or payment portal closely enough to build trust.',
      'The victim entered details and later received fraud alerts after money was moved.',
    ],
    warningSigns: [
      'Unsolicited KYC update message',
      'Misspelled or unusual website link',
      'Blocking threat used to pressure action',
      'Request for sensitive credentials outside official channels',
    ],
    victimCouldHaveDone: [
      'Opened the bank app manually instead of clicking the link.',
      'Called the bank using a verified number.',
      'Ignored any KYC request that arrived by message or chat.',
    ],
    preventionTips: [
      'Banks do not ask for KYC fixes through random messages.',
      'Never enter OTP, PIN, or card data on a link received via text.',
      'Verify using the official app or website only.',
    ],
    keyTakeaway:
      'Blocking threats are designed to make you skip verification. Slowing down is the safest response.',
  },
  {
    id: 'whatsapp-job',
    title: 'WhatsApp Job Scam',
    victimProfile: 'College Student',
    loss: '₹72,000',
    category: 'Employment Fraud',
    summary:
      'A fake recruiter offered easy online work, then moved the victim through paid tasks, deposits, and withdrawal delays.',
    howItWorked: [
      'The scam began with a believable part-time job promise.',
      'Small tasks were used to create trust and show fake earnings.',
      'Larger deposits were then requested to unlock withdrawals or higher-paying assignments.',
    ],
    warningSigns: [
      'Guaranteed income for simple online tasks',
      'Requests for deposits before payment',
      'Pressure to move the conversation to WhatsApp',
      'Too-good-to-be-true earnings screenshots',
    ],
    victimCouldHaveDone: [
      'Checked the company independently before engaging.',
      'Refused to pay money to access earnings.',
      'Stopped the conversation at the first deposit request.',
    ],
    preventionTips: [
      'Legitimate employers do not charge you to unlock work or salary.',
      'Treat guaranteed returns and instant earning promises as high risk.',
      'Verify recruiter identity through an official company domain.',
    ],
    keyTakeaway:
      'Scam job offers are designed to feel low-risk at first, then trap victims with fake growth and withdrawal barriers.',
  },
];

const highlights = [
  {
    icon: FileText,
    title: 'Detailed Analysis',
    description: 'Clear breakdown of how each fraud pattern unfolds.',
  },
  {
    icon: Clock,
    title: 'Timeline Views',
    description: 'Step-by-step progression from first contact to loss.',
  },
  {
    icon: TrendingUp,
    title: 'Lessons Learned',
    description: 'Practical prevention habits that reduce repeat risk.',
  },
  {
    icon: Users,
    title: 'Victim Context',
    description: 'Realistic profiles that make the education feel grounded.',
  },
];

const CaseStudiesPage: React.FC = () => {
  const [expandedCases, setExpandedCases] = useState<Record<string, boolean>>({});

  const toggleCase = (id: string) => {
    setExpandedCases((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        <section className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-600/15 text-green-400 text-sm font-semibold mb-5 border border-green-500/20">
            Case Study Library
          </div>
          <h1 className="text-5xl font-bold text-green-400 mb-6">
            Real incidents, readable stories
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            These expandable stories are designed to feel like a real awareness portal, not just a static list of fraud categories.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {caseStudies.map((caseStudy) => {
            const isExpanded = expandedCases[caseStudy.id] === true;

            return (
              <article
                key={caseStudy.id}
                className="bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-green-500/40 transition-all duration-300 shadow-lg shadow-black/20"
              >
                <div className="h-40 bg-gradient-to-br from-gray-800 via-gray-900 to-black border-b border-gray-700 p-5 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">{caseStudy.category}</p>
                      <h2 className="text-2xl font-bold text-green-400 leading-tight">{caseStudy.title}</h2>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white shrink-0 ${
                        caseStudy.id === 'digital-arrest'
                          ? 'bg-red-600'
                          : caseStudy.id === 'upi-refund'
                            ? 'bg-orange-600'
                            : caseStudy.id === 'fake-kyc'
                              ? 'bg-yellow-600'
                              : 'bg-rose-600'
                      }`}
                    >
                      {caseStudy.id === 'digital-arrest' ? 'Critical' : caseStudy.id === 'upi-refund' ? 'High' : caseStudy.id === 'fake-kyc' ? 'High' : 'Medium'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                    <div className="rounded-lg bg-black/30 border border-gray-800 p-3">
                      <div className="text-gray-500 uppercase text-[11px] tracking-wide mb-1">Victim</div>
                      <div className="font-semibold text-white">{caseStudy.victimProfile}</div>
                    </div>
                    <div className="rounded-lg bg-black/30 border border-gray-800 p-3">
                      <div className="text-gray-500 uppercase text-[11px] tracking-wide mb-1">Loss</div>
                      <div className="font-semibold text-white">{caseStudy.loss}</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.summary}</p>

                  <button
                    type="button"
                    onClick={() => toggleCase(caseStudy.id)}
                    className="cyber-button w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>{isExpanded ? 'Hide Full Story' : 'Read Full Story'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {isExpanded && (
                    <div className="space-y-4 rounded-xl border border-green-500/20 bg-green-500/5 p-4 text-sm text-gray-200">
                      <div>
                        <h3 className="text-green-300 font-semibold mb-2">Incident Summary</h3>
                        <p className="text-gray-300 leading-relaxed">{caseStudy.summary}</p>
                      </div>

                      <div>
                        <h3 className="text-green-300 font-semibold mb-2">How the Scam Worked</h3>
                        <ul className="space-y-2 text-gray-300">
                          {caseStudy.howItWorked.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="text-green-400 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-green-300 font-semibold mb-2">Warning Signs</h3>
                        <ul className="space-y-2 text-gray-300">
                          {caseStudy.warningSigns.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="text-red-400 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-green-300 font-semibold mb-2">What the Victim Could Have Done</h3>
                        <ul className="space-y-2 text-gray-300">
                          {caseStudy.victimCouldHaveDone.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="text-blue-400 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-green-300 font-semibold mb-2">Prevention Tips</h3>
                        <ul className="space-y-2 text-gray-300">
                          {caseStudy.preventionTips.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="text-green-400 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg bg-black/30 border border-gray-800 p-4">
                        <h3 className="text-green-300 font-semibold mb-2">Key Takeaway</h3>
                        <p className="text-gray-300 leading-relaxed">{caseStudy.keyTakeaway}</p>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="text-center bg-gray-900 rounded-lg p-6 border border-gray-700"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mb-4 mx-auto">
                <highlight.icon className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-300">{highlight.description}</p>
            </div>
          ))}
        </section>

        <TimelineSlider />
      </div>
    </div>
  );
};

export default CaseStudiesPage;