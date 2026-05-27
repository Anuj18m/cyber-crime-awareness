import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertTriangle, CheckCircle, Send, Shield } from 'lucide-react';
import type { ReportSubmission } from '../types/report';

type ReportFormValues = ReportSubmission & {
  evidence?: FileList;
};

const reportSchema: z.ZodType<ReportFormValues> = z.object({
  threatType: z.string().min(1, 'Please select incident type'),
  platform: z.string().min(1, 'Please select platform involved'),
  estimatedLoss: z.string().min(1, 'Please select estimated financial loss'),
  incidentDate: z.string().min(1, 'Please select date of incident'),
  description: z
    .string()
    .min(20, 'Please provide at least 20 characters in the description'),
  severity: z.string().min(1, 'Please select severity level'),
  contact: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || z.string().email().safeParse(value).success, {
      message: 'Please enter a valid email address',
    }),
  evidence: z
    .custom<FileList | undefined>((value) => value === undefined || value instanceof FileList)
    .optional(),
});

interface SubmissionResult {
  reportId: string;
  submittedAt: string;
}

const generateReportId = () => {
  const year = new Date().getFullYear();
  const randomChunk = Math.floor(1000 + Math.random() * 9000);
  return `CCR-${year}-${randomChunk}`;
};

const formatSubmissionTimestamp = (date: Date) => {
  return date.toLocaleString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

const ReportPage: React.FC = () => {
  const [submission, setSubmission] = useState<SubmissionResult | null>(null);
  const [selectedEvidenceName, setSelectedEvidenceName] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReportFormValues>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      threatType: '',
      platform: '',
      estimatedLoss: '',
      incidentDate: '',
      description: '',
      severity: '',
      contact: '',
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    const now = new Date();
    const reportId = generateReportId();

    setSubmission({
      reportId,
      submittedAt: formatSubmissionTimestamp(now),
    });
  };

  const submitAnotherReport = () => {
    reset();
    setSubmission(null);
    setSelectedEvidenceName('');
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

        {submission && (
          <div className="mb-8 bg-green-900/20 border border-green-500/30 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-green-400 mb-2">Report Submitted</h2>
                <p className="text-gray-300 mb-5">
                  Your report has been recorded in this demo workflow. Please save the reference details below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 border border-gray-700 rounded-md p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Report ID</p>
                    <p className="text-xl font-bold text-white">{submission.reportId}</p>
                  </div>
                  <div className="bg-black/30 border border-gray-700 rounded-md p-4">
                    <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Submission Timestamp</p>
                    <p className="text-white font-semibold">{submission.submittedAt}</p>
                  </div>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-md p-4 mb-6">
                  <p className="text-sm font-semibold text-red-300 uppercase tracking-wide mb-2">
                    Recommended Next Actions
                  </p>
                  <ul className="space-y-2 text-gray-200 text-sm">
                    <li>✓ Contact your bank immediately</li>
                    <li>✓ Call Cyber Crime Helpline: 1930</li>
                    <li>✓ Preserve screenshots and transaction evidence</li>
                    <li>✓ Block suspicious accounts and reset affected passwords</li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={submitAnotherReport}
                  className="cyber-button bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition-all duration-300"
                >
                  Submit Another Report
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-green-400 font-semibold mb-2">
                Incident Type
              </label>
              <select
                {...register('threatType')}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-3 text-white focus:border-green-400 focus:outline-none"
              >
                <option value="">Select threat type</option>
                <option value="upi-fraud">UPI Fraud</option>
                <option value="digital-arrest-scam">Digital Arrest Scam</option>
                <option value="whatsapp-job-scam">WhatsApp Job Scam</option>
                <option value="fake-kyc-update">Fake KYC Update</option>
                <option value="qr-code-scam">QR Code Scam</option>
                <option value="telegram-investment-scam">Telegram Investment Scam</option>
                <option value="loan-app-harassment">Loan App Harassment</option>
                <option value="other">Other</option>
              </select>
              {errors.threatType && (
                <p className="text-red-400 text-sm mt-2">{errors.threatType.message}</p>
              )}
            </div>

            <div>
              <label className="block text-green-400 font-semibold mb-2">
                Platform Involved
              </label>
              <select
                {...register('platform')}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-3 text-white focus:border-green-400 focus:outline-none"
              >
                <option value="">Select platform</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="telegram">Telegram</option>
                <option value="instagram">Instagram</option>
                <option value="facebook">Facebook</option>
                <option value="phone-call">Phone Call</option>
                <option value="sms">SMS</option>
                <option value="email">Email</option>
                <option value="upi-app">UPI App</option>
                <option value="other">Other</option>
              </select>
              {errors.platform && (
                <p className="text-red-400 text-sm mt-2">{errors.platform.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-green-400 font-semibold mb-2">
                  Estimated Financial Loss
                </label>
                <select
                  {...register('estimatedLoss')}
                  className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                >
                  <option value="">Select loss range</option>
                  <option value="0">₹0</option>
                  <option value="1-5000">₹1 - ₹5,000</option>
                  <option value="5000-50000">₹5,000 - ₹50,000</option>
                  <option value="50000+">₹50,000+</option>
                </select>
                {errors.estimatedLoss && (
                  <p className="text-red-400 text-sm mt-2">{errors.estimatedLoss.message}</p>
                )}
              </div>

              <div>
                <label className="block text-green-400 font-semibold mb-2">
                  Date of Incident
                </label>
                <input
                  type="date"
                  {...register('incidentDate')}
                  className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                />
                {errors.incidentDate && (
                  <p className="text-red-400 text-sm mt-2">{errors.incidentDate.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-green-400 font-semibold mb-2">
                Description
              </label>
              <textarea
                {...register('description')}
                rows={5}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                placeholder="Describe the threat in detail..."
              />
              {errors.description && (
                <p className="text-red-400 text-sm mt-2">{errors.description.message}</p>
              )}
            </div>

            <div>
              <label className="block text-green-400 font-semibold mb-2">
                Screenshot / Evidence Upload
              </label>
              <input
                type="file"
                accept="image/*,.pdf"
                {...register('evidence')}
                onChange={(e) => {
                  setSelectedEvidenceName(e.target.files?.[0]?.name || '');
                }}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-3 text-white focus:border-green-400 focus:outline-none"
              />
              {selectedEvidenceName && (
                <p className="text-sm text-gray-400 mt-2">Selected file: {selectedEvidenceName}</p>
              )}
            </div>

            <div>
              <label className="block text-green-400 font-semibold mb-2">
                Severity Level
              </label>
              <select
                {...register('severity')}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-3 text-white focus:border-green-400 focus:outline-none"
              >
                <option value="">Select severity</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
              {errors.severity && (
                <p className="text-red-400 text-sm mt-2">{errors.severity.message}</p>
              )}
            </div>

            <div>
              <label className="block text-green-400 font-semibold mb-2">
                Contact Information (Optional)
              </label>
              <input
                type="email"
                {...register('contact')}
                className="w-full bg-gray-800 border border-gray-600 rounded-md px-4 py-3 text-white focus:border-green-400 focus:outline-none"
                placeholder="your.email@example.com"
              />
              {errors.contact && (
                <p className="text-red-400 text-sm mt-2">{errors.contact.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="cyber-button w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-md text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? 'Submitting...' : 'Submit Report'}</span>
            </button>
          </form>
        </div>

        <div className="mt-12 bg-green-900/20 border border-green-500/30 rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-green-400" />
            <h3 className="text-lg font-semibold text-green-400">Privacy Notice</h3>
          </div>
          <p className="text-gray-300">
            This demonstration portal is designed for educational purposes.
            Do not submit real personal, banking, or confidential information.
          </p>
          <p className="text-gray-300 mt-4">
            If you are a victim of cybercrime in India, immediately contact the Cyber Crime Helpline (1930)
            or report through the National Cyber Crime Reporting Portal.
          </p>
        </div>

        <div className="mt-8 bg-red-900/20 border border-red-500/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-400 mb-4">
            Immediate Steps If You&apos;ve Been Scammed
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>✓ Contact your bank immediately</li>
            <li>✓ Call Cyber Crime Helpline: 1930</li>
            <li>✓ Block suspicious numbers</li>
            <li>✓ Save screenshots and transaction IDs</li>
            <li>✓ Change passwords if credentials were shared</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;