import type { CyberThreat } from '../types/cyberThreat';

export const cyberThreats: CyberThreat[] = [
  {
    title: 'Digital Arrest Scam',
    category: 'Impersonation Scam',
    severity: 'critical',
    trendLevel: 'rising',
    platform: 'Video Call',
    victimProfile: 'Working Professionals',
    estimatedLoss: '₹2–5 Lakhs',
    caseSnapshot:
      'Fraudsters impersonate law-enforcement agencies and pressure victims into transferring money for fake verification procedures.',
    image:
      'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  },
  {
    title: 'UPI Refund Scam',
    category: 'Payment Fraud',
    severity: 'high',
    trendLevel: 'very common',
    platform: 'UPI Apps',
    victimProfile: 'Online Shoppers',
    estimatedLoss: '₹5,000–₹50,000',
    caseSnapshot:
      'Victims are told a refund is pending, then they are tricked into approving a collect request or scanning a QR code that sends money out.',
    image:
      'https://images.pexels.com/photos/4386295/pexels-photo-4386295.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  },
  {
    title: 'Fake KYC Update Scam',
    category: 'Account Takeover',
    severity: 'high',
    trendLevel: 'common',
    platform: 'SMS / WhatsApp',
    victimProfile: 'Bank Customers',
    estimatedLoss: '₹10,000–₹1 Lakh',
    caseSnapshot:
      'Messages claim an account or wallet will be blocked unless the user completes a fake KYC update through a spoofed portal.',
    image:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  },
  {
    title: 'WhatsApp Job Scam',
    category: 'Employment Fraud',
    severity: 'medium',
    trendLevel: 'rising',
    platform: 'WhatsApp',
    victimProfile: 'Students and Job Seekers',
    estimatedLoss: '₹2,000–₹25,000',
    caseSnapshot:
      'Scammers offer easy online jobs, then request deposits, document copies, or payments to unlock tasks and fake earnings.',
    image:
      'https://images.pexels.com/photos/7693731/pexels-photo-7693731.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  },
  {
    title: 'Telegram Investment Scam',
    category: 'Investment Fraud',
    severity: 'critical',
    trendLevel: 'rising',
    platform: 'Telegram',
    victimProfile: 'Retail Investors',
    estimatedLoss: '₹50,000–₹10 Lakh',
    caseSnapshot:
      'Fraudulent groups promise guaranteed returns, show fake profit screenshots, and block withdrawals once larger deposits are made.',
    image:
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  },
  {
    title: 'Loan App Extortion',
    category: 'Digital Lending Fraud',
    severity: 'critical',
    trendLevel: 'common',
    platform: 'Android Apps',
    victimProfile: 'Salaried Users',
    estimatedLoss: '₹5,000–₹2 Lakh',
    caseSnapshot:
      'Fraud lending apps access contacts and photos, then threaten to shame victims publicly when repayment pressure begins.',
    image:
      'https://images.pexels.com/photos/4386398/pexels-photo-4386398.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
  },
];