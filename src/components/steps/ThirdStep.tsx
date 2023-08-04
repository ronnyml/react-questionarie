import React, { useState, useCallback, useMemo } from "react";
import { isValidEmail } from "utils/validators";
import { REQUIRED_FIELD, INVALID_EMAIL } from "utils/constants";
import StickyBar from "../StickyBar";
import { type ContactData } from "types/form.types";
import { type WizardProps } from "types/step.type";
import "styles/Form.css";
import { useFormContext } from "context/AppContext";

const ThirdStep: React.FC<WizardProps> = ({
  step,
  numSteps,
  handleNext,
  handleBack
}) => {
  const { formData, setFormData } = useFormContext();
  const [errors, setErrors] = useState<ContactData>({
    email: "",
    address: ""
  });

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (value === "") {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: REQUIRED_FIELD }));
    } else if (name === "email" && !isValidEmail(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: INVALID_EMAIL }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  }, [setFormData]
  );

  const handleBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (value === "") {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: REQUIRED_FIELD }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  }, []
  );

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form data:", formData);
    handleNext?.();
  }, [handleNext, formData]
  );

  const isFormValid = useMemo(() => {
    const { email, address } = formData;
    return !(email === "") && !(address === "");
  }, [formData]);

  return (
    <div className="right-container">
      <div className="form-container">
        <form id="form" onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="email"
              className={`form-input ${(errors.email !== "") ? "border-error" : ""}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              required
            />
            {(errors.email !== "") && <span className="error">{errors.email}</span>}
          </div>

          <div className="field">
            <input
              type="text"
              className={`form-input ${(errors.address !== "") ? "border-error" : ""}`}
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Address"
              required
            />
            {(errors.address !== "") && <span className="error">{errors.address}</span>}
          </div>
        </form>

        <StickyBar
          numSteps={numSteps}
          step={step}
          handleBack={handleBack}
          isFormValid={isFormValid}
        />
      </div>
    </div>
  );
};

export default ThirdStep;
