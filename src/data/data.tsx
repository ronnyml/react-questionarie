import { type Option } from "types/option.type";

export const languages: Option[] = [
  { value: "spanish", label: "Spanish" },
  { value: "english", label: "English" },
  { value: "french", label: "French" },
  { value: "chinese", label: "Chinese" }
];

export const insurances: Option[] = [
  { value: "aetna", label: "Aetna" },
  { value: "blue_cross_blue_shield", label: "Blue Cross Blue Shield" },
  { value: "cigna", label: "Cigna" },
  { value: "united_healthcare", label: "United Healthcare" },
  { value: "medicare", label: "Medicare" }
];

export const specialities: Option[] = [
  { value: "family_medicine", label: "Family Medicine" },
  { value: "pediatrics", label: "Pediatrics" },
  { value: "dermatology", label: "Dermatology" },
  { value: "orthopedics", label: "Orthopedics" },
  { value: "psychiatry", label: "Psychiatry" }
];
