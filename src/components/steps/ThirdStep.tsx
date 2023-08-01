import React, { useState } from "react";
import { ContactData } from "types/form.types";
import { isValidEmail } from "utils/validators";
import { REQUIRED_FIELD, INVALID_EMAIL } from "utils/constants";
import StickyBar from "../StickyBar";
import { StickyBarProps } from "types/step.type";
import "styles/Form.css";

const ThirdStep: React.FC<StickyBarProps> = ({
  step,
  numSteps,
  handleNext,
  handleBack,
}) => {
  const [formData, setFormData] = useState<ContactData>({
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState<ContactData>({
    email: "",
    address: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (!value) {
      setErrors({ ...errors, [name]: REQUIRED_FIELD });
    } else if (name === "email" && !isValidEmail(value)) {
      setErrors({ ...errors, email: INVALID_EMAIL });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (!value) {
      setErrors({ ...errors, [name]: REQUIRED_FIELD });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form data:", formData);
  };

  const isFormValid = () => {
    const { email, address } = formData;
    return (!!email && !!address);
  };

  return (
    <div className="right-container">
      <div className="form-container">
        <form>
          <div className="field">
            <input
              type="email"
              className={`form-input ${errors.email ? "border-error" : ""}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="field">
            <input
              type="text"
              className={`form-input ${errors.address ? "border-error" : ""}`}
              name="address"
              value={formData.address}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Address"
              required
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>
        </form>

        <StickyBar
            numSteps={numSteps} 
            step={step}
            handleNext={handleNext}
            handleBack={handleBack}
            isFormValid={isFormValid()} />
      </div>
    </div>
  );
};

export default ThirdStep;
