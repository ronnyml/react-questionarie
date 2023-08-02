import { createContext, useContext, useState } from "react";

interface FormContextData {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  resetFormData: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  languages: [];
  phoneNumber: string;
  insurance: string;
  speciality: string;
  description: string;
  email: string;
  address: string;
}

export const initialState: FormData = {
  firstName: "",
  lastName: "",
  languages: [],
  phoneNumber: "",
  insurance: "",
  speciality: "",
  description: "",
  email: "",
  address: "",
};

const FormContext = createContext<FormContextData>({
  formData: initialState,
  setFormData: () => {},
  resetFormData: () => {}
});

export const useFormContext = () => {
  return useContext(FormContext);
}

export const FormContextProvider = ({children}: {children: React.ReactNode}) => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const resetFormData = () => {
    setFormData(initialState);
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  );
}
