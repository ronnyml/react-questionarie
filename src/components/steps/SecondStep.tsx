import React, { useState, useCallback, useMemo } from "react";
import Select, { type ActionMeta, type SingleValue } from "react-select";

import { multiDropdownStyles } from "styles/customStyles";
import { insurances, specialities } from "data/data";
import { REQUIRED_FIELD } from "utils/constants";
import StickyBar from "../StickyBar";
import { type Option } from "types/option.type";
import { type ProviderData } from "types/form.types";
import { type WizardProps } from "types/step.type";
import "styles/Form.css";
import { useFormContext } from "context/AppContext";

const SecondStep: React.FC<WizardProps> = ({
  step,
  numSteps,
  handleNext,
  handleBack
}) => {
  const { formData, setFormData } = useFormContext();
  const [errors, setErrors] = useState<ProviderData>({
    insurance: "",
    speciality: "",
    description: ""
  });

  const handleChange = useCallback((selectedOption: SingleValue<Option>, actionMeta: ActionMeta<Option>) => {
    if (selectedOption !== null) {
      const { name } = actionMeta;
      const value = selectedOption.value;
      setFormData((prevData) => ({ ...prevData, [name as string]: value }));
      setErrors((prevErrors) => ({ ...prevErrors, [name as string]: "" }));
    }
  }, [setFormData]
  );

  const handleBlur = useCallback((fieldName: keyof ProviderData) => () => {
    const fieldValue = formData[fieldName].trim();
    if (fieldName === "description") {
      setFormData((prevData) => ({ ...prevData, description: fieldValue }));
    }
    if (fieldValue === "") {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: REQUIRED_FIELD }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    }
  }, [formData, setFormData]
  );

  const handleTextAreaChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      description: (value !== "") ? "" : REQUIRED_FIELD
    }));
  }, [setFormData]
  );

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    handleNext?.();
  }, [handleNext]
  );

  const isFormValid = useMemo(() => {
    const { insurance, speciality, description } = formData;
    return !!((insurance !== "") && (speciality !== "") && (description !== ""));
  }, [formData]);

  return (
    <div className="right-container">
      <div className="form-container">
        <form id="form" onSubmit={handleSubmit}>
          <div className="field">
            <Select
              isMulti={false}
              name="insurance"
              value={insurances.find(i => i.value === formData.insurance)}
              options={insurances}
              placeholder="Insurance"
              onChange={handleChange}
              onBlur={handleBlur("insurance")}
              styles={multiDropdownStyles}
              required
            />
            {(errors.insurance !== "") && (
              <span className="error">{errors.insurance}</span>
            )}
          </div>

          <div className="field">
            <Select
              isMulti={false}
              name="speciality"
              defaultValue={specialities.find(s => s.value === formData.speciality)}
              options={specialities}
              placeholder="Speciality"
              onChange={handleChange}
              onBlur={handleBlur("speciality")}
              styles={multiDropdownStyles}
              required
            />
            {(errors.speciality !== "") && (
              <span className="error">{errors.speciality}</span>
            )}
          </div>

          <div className="field">
            <textarea
              className={`form-input textarea ${
                (errors.description !== "") ? "border-error" : ""
              }`}
              name="description"
              value={formData.description}
              onChange={handleTextAreaChange}
              onBlur={handleBlur("description")}
              placeholder="Tell us about yourself."
              required
            />
            {(errors.description !== "") && (
              <span className="error">{errors.description}</span>
            )}
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

export default SecondStep;
