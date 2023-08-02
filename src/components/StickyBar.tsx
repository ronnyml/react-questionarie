/* eslint-disable react/prop-types */
import { type WizardProps } from "types/step.type";

const StickyBar: React.FC<WizardProps> = ({
  step,
  numSteps,
  handleBack,
  isFormValid
}) => {
  return (
    <div className="sticky-bottom-bar">
      <button
        type="button"
        onClick={handleBack}
        className={`go-back-button ${step.key === 1 ? "no-display" : ""}`}
      >
        Go Back
      </button>

      <button
        type="submit"
        form="form"
        disabled={!isFormValid}
        className={`save-continue-button ${step.key === numSteps ? "no-display" : ""}`}
      >
        Save and Continue
      </button>
    </div>
  );
};

export default StickyBar;
