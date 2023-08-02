import { useState } from "react";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import FinalStep from "./steps/FinalStep";

import { stepsData } from "data/steps";


const Wizard = () => {
  const [steps, setSteps] = useState(stepsData);
  const [activeStep, setActiveStep] = useState(steps[0]);

  const updateSteps = (isDone: boolean) => {
    const index = steps.findIndex(step => step.key === activeStep.key);
    setSteps(prevStep => prevStep.map(step => {
      if (step.key === activeStep.key) step.isDone = isDone;
      return step;
    }))
    setActiveStep(isDone ? steps[index + 1] : steps[index - 1]);
  };

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      return;
    }
    updateSteps(true);
  };

  const handleBack = () => {
    const index = steps.findIndex((step) => step.key === activeStep.key);
    if (index === 0) {
      return;
    }
    updateSteps(false);
  };

  const restart = () => {
    setActiveStep(steps[0])
  }

  const stepProps = {
    step: activeStep,
    numSteps: steps.length,
    handleNext: handleNext,
    handleBack: handleBack,
    isFormValid: false,
  };

  const renderActiveStepComponent = () => {
    switch (activeStep.key) {
      case 1:
        return <FirstStep {...stepProps } />;
      case 2:
        return <SecondStep {...stepProps } />;
      case 3:
        return <ThirdStep {...stepProps } />;
      default:
        return <FinalStep restart={restart} />;
    }
  };

  return (
    <>
      <div className="wizard">
        {steps.map((step) => {
          return (step.key < steps.length &&
            <div key={step.key} className="step">
              <div
                className={`circle ${step.isDone ? "step-done" : ""} ${
                  activeStep.key === step.key ? "circle-active" : ""
                }`}
              >
                {step.key}
              </div>
              {(step.key + 1 < steps.length) && <span className="line"></span>}
              <div
                className={`step-name ${
                  activeStep.key === step.key ? "step-active" : ""
                }`}
              >
                {step.label}
              </div>
            </div>
          );
        })}
      </div>
      
      <h1 className="title">{activeStep.title}</h1>
      <h1 className="subtitle">{activeStep.subtitle}</h1>
      {renderActiveStepComponent()}
    </>
  );
};

export default Wizard;
