import React from 'react';
import { learningTracks } from '../data/learningTracks';
import { useState } from 'react';

const LearnPage: React.FC = () => {
  const [expandedTrack, setExpandedTrack] = useState<string | null>('Beginner');

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-400 mb-6">
            Learning Tracks
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Structured learning paths focused on the scams, tactics, and safety practices
            most relevant to Indian users.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {learningTracks.map((track) => {
            const isExpanded = expandedTrack === track.level;

            return (
            <div
              key={track.level}
              className="bg-gray-900 rounded-lg p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-600/20 text-green-400 text-sm font-semibold mb-4">
                    {track.level}
                  </div>
                  <h2 className="text-2xl font-bold text-green-400 mb-3">
                    {track.level} Track
                  </h2>
                  <p className="text-gray-300">
                    {track.description}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-2xl font-bold text-white">{track.modules.length}</div>
                  <div className="text-sm text-gray-400">Modules</div>
                  <div className="text-sm text-green-400 mt-2">{track.duration}</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {track.modules.map((module) => (
                  <div
                    key={module}
                    className="flex items-start gap-3 p-3 rounded-md bg-black/30 border border-gray-800"
                  >
                    <span className="text-green-400 mt-0.5">✔</span>
                    <span className="text-gray-200">{module}</span>
                  </div>
                ))}
              </div>

              {isExpanded && (
                <div className="mb-6 rounded-lg border border-green-500/20 bg-green-500/5 p-4 text-sm text-gray-200">
                  <p className="font-semibold text-green-300 mb-2">What this track does</p>
                  <p className="text-gray-300 mb-3">
                    A practical path for building confidence with common scam patterns, verification habits, and reporting steps.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Recommended pace: 1 to 2 sessions</li>
                    <li>• Practice goal: identify warning signs before responding</li>
                    <li>• Outcome: know when to verify, block, or report</li>
                  </ul>
                </div>
              )}

              <button
                type="button"
                onClick={() => setExpandedTrack(isExpanded ? null : track.level)}
                className="cyber-button w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md transition-all duration-300"
              >
                {isExpanded ? 'Hide Track Details' : `Start ${track.level} Track`}
              </button>
            </div>
          );
          })}
        </div>
      </div>
    </div>
  );
};

export default LearnPage;