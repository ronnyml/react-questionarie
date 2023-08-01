import { Option } from "./option.type"

export type PersonalData = {
  firstName: string;
  lastName: string;
  languages: Option[];
  phoneNumber: string;
}

export type ProviderData = {
  insurance: string;
  speciality: string;
  description: string;
}

export type ContactData = {
  email: string;
  address: string;
}
