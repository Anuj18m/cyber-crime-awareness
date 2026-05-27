export interface ReportSubmission {
  threatType: string;
  platform: string;
  estimatedLoss: string;
  incidentDate: string;
  description: string;
  severity: string;
  contact?: string;
}
