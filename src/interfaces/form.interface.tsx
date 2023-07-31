import { LanguageOption } from "./language.interface";

export interface FormData {
  firstName: string;
  lastName: string;
  languages: LanguageOption[];
  phoneNumber: string;
}
