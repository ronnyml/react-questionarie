import React, { useState } from "react";
import Select, { ActionMeta } from "react-select";

import { Option } from "types/option.type";

import { ProviderData } from "types/form.types";
import { multiDropdownStyles } from "styles/customStyles";
import { insurances, specialities } from "data/data";
import { REQUIRED_FIELD } from "utils/constants";
import StickyBar from "../StickyBar";
import { WizardProps } from "types/step.type";
import "styles/Form.css";

const SecondStep: React.FC<WizardProps> = ({
  step,
  numSteps,
  handleNext,
  handleBack
}) => {
  const [formData, setFormData] = useState<ProviderData>({
    insurance: "",
    speciality: "",
    description: "",
  });

  const [errors, setErrors] = useState<ProviderData>({
    insurance: "",
    speciality: "",
    description: "",
  });

  const handleChange = (
    selectedOption: any,
    actionMeta: ActionMeta<Option>
  ) => {
    if (selectedOption) {
      const name = actionMeta.name;
      const value = selectedOption.value;
      setFormData({ ...formData, [name as string]: value });
      if (value) {
        setErrors({ ...errors, [name as string]: "" });
      }
    }
  };

  const handleBlur = (fieldName: keyof ProviderData) => () => {
    const fieldsToCheck: ProviderData = {
      insurance: formData.insurance,
      speciality: formData.speciality,
      description: formData.description,
    };

    if (!fieldsToCheck[fieldName]) {
      setErrors({ ...errors, [fieldName]: REQUIRED_FIELD });
    } else {
      setErrors({ ...errors, [fieldName]: "" });
    }
  };

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (!value) {
      setErrors({ ...errors, description: REQUIRED_FIELD });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form data:", formData);
    handleNext?.();
  };

  const isFormValid = () => {
    const { insurance, speciality, description } = formData;
    return (!!insurance && !!speciality && !!description);
  };

  return (
    <div className="right-container">
      <div className="form-container">
        <form id="form" onSubmit={handleSubmit}>
          <div className="field">
            <Select
              name="insurance"
              options={insurances}
              placeholder="Insurance"
              onChange={handleChange}
              onBlur={handleBlur("insurance")}
              styles={multiDropdownStyles}
              required
            />
            {errors.insurance && (
              <span className="error">{errors.insurance}</span>
            )}
          </div>

          <div className="field">
            <Select
              name="speciality"
              options={specialities}
              placeholder="Speciality"
              onChange={handleChange}
              onBlur={handleBlur("speciality")}
              styles={multiDropdownStyles}
              required
            />
            {errors.speciality && (
              <span className="error">{errors.speciality}</span>
            )}
          </div>

          <div className="field">
            <textarea
              className={`form-input textarea ${
                errors.description ? "border-error" : ""
              }`}
              name="description"
              value={formData.description}
              onChange={handleTextAreaChange}
              onBlur={handleBlur("description")}
              placeholder="Tell us about yourself."
              required
            />
            {errors.description && (
              <span className="error">{errors.description}</span>
            )}
          </div>
        </form>

        <StickyBar
          numSteps={numSteps}
          step={step}
          handleBack={handleBack}
          isFormValid={isFormValid()}
        />
      </div>
    </div>
  );
};

export default SecondStep;
