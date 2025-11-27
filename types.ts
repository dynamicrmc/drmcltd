export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  details: string[];
  benefits: string[];
  iconName: string;
  image: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  about: string;
  vision: string;
  mission: string;
  values: Value[];
  contact: {
    address: string;
    emails: string[];
    phones: string[];
    whatsapp: string;
  };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum FormType {
  JOB = 'Job Application',
  CONSULTANCY = 'Consultancy Request',
  TRAINING = 'Training Registration',
  BOOKING = 'Service Booking'
}