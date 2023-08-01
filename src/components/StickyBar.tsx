import { StickyBarProps } from "types/step.type";

const StickyBar: React.FC<StickyBarProps> = ({
  step,
  numSteps,
  handleNext,
  handleBack,
  isFormValid,
}) => {
  return (
    <div className="sticky-bottom-bar">
      <button
        type="button"
        onClick={handleBack}
        className={`go-back-button ${step.key === 1 ? "no-display" : ""}`}
      >
        Go Back {step.key}
      </button>
      <button
        type="button"
        onClick={handleNext}
        disabled={!isFormValid}
        className={`save-continue-button ${step.key === numSteps ? "no-display" : ""}`}
      >
        Save and Continue
      </button>
    </div>
  );
};

export default StickyBar;
