export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  delay: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactMessageSubmission {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
}
