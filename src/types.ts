export interface Provider {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AppointmentFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  providerId: string;
  reason: string;
}
