import React, { useState } from "react";
import Select from "react-select";

import { FormData } from "../interfaces/form.interface";
import { multiDropdownStyles, errorStyles } from "../styles/customStyles";
import { languages } from "../data/data";
import { isValidPhoneNumber } from "../utils/validators";
import { REQUIRED_FIELD, INVALID_PHONE_NUMBER } from "../utils/constants";
import "../styles/Form.css";

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    languages: [],
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    languages: "",
    phoneNumber: "",
  });

  const handleLanguageChange = (selectedOptions: any) => {
    setFormData({ ...formData, languages: selectedOptions });
    setErrors({ ...errors, languages: "" });
    if (selectedOptions.length === 0) {
      setErrors({ ...errors, languages: REQUIRED_FIELD });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (value) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleLanguageBlur = (e: any) => {
    if (formData.languages.length === 0) {
      setErrors({ ...errors, languages: REQUIRED_FIELD });
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (!value) {
      setErrors({ ...errors, [name]: REQUIRED_FIELD });
    } else if (name === "phoneNumber" && !isValidPhoneNumber(value)) {
      setErrors({ ...errors, phoneNumber: INVALID_PHONE_NUMBER });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form data:", formData);
  };

  const customStyles = errors.languages
    ? { ...multiDropdownStyles, ...errorStyles }
    : multiDropdownStyles;

  const isFormValid = () => {
    const { firstName, lastName, languages, phoneNumber } = formData;
    return (
      firstName &&
      lastName &&
      Array.isArray(languages) &&
      languages.length > 0 &&
      isValidPhoneNumber(phoneNumber)
    );
  };

  return (
    <div className="right-container">
    <div className="form-container">
      <form>
        <div className="field">
          <input
            type="text"
            className={`form-input ${errors.firstName ? "border-error" : ""}`}
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="First Name"
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>
        <div className="field">
          <input
            type="text"
            className={`form-input ${errors.lastName ? "border-error" : ""}`}
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Last Name"
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="field">
          <Select
            isMulti
            isSearchable
            name="languages"
            options={languages}
            onChange={handleLanguageChange}
            placeholder="Add language"
            onBlur={handleLanguageBlur}
            styles={customStyles}
          />
          {errors.languages && (
            <span className="error">{errors.languages}</span>
          )}
        </div>

        <div className="field">
          <input
            type="text"
            className={`form-input ${errors.phoneNumber ? "border-error" : ""}`}
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Phone Number"
          />
          {errors.phoneNumber && (
            <span className="error">{errors.phoneNumber}</span>
          )}
        </div>




      </form>

      <div className="sticky-bottom-bar">
          <button type="button" className="go-back-button">
            Go Back
          </button>
          <button type="submit" onClick={handleSubmit} className="save-continue-button" disabled={!isFormValid()}>
            Save and Continue
          </button>
      </div>

      
    </div>


    </div>
  );
};

export default Form;
