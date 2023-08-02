import { type Option } from "./option.type";

export interface PersonalData {
  firstName: string
  lastName: string
  languages: Option[]
  phoneNumber: string
}

export interface ProviderData {
  insurance: string
  speciality: string
  description: string
}

export interface ContactData {
  email: string
  address: string
}
