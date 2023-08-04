import { useState } from "react";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import FinalStep from "./steps/FinalStep";
import { stepsData } from "data/steps";
import { FormContextProvider } from "context/AppContext";

const Wizard = () => {
  const [steps, setSteps] = useState(stepsData);
  const [activeStep, setActiveStep] = useState(steps[0]);
  const { key: activeStepKey, title, subtitle } = activeStep;

  const updateSteps = (isDone: boolean) => {
    const index = steps.findIndex(step => step.key === activeStep.key);
    const newSteps = [...steps];
    newSteps[index].isDone = isDone;
    setSteps(newSteps);
    setActiveStep(isDone ? steps[index + 1] : steps[index - 1]);
  };

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStepKey) {
      return;
    }
    updateSteps(true);
  };

  const handleBack = () => {
    const index = steps.findIndex((step) => step.key === activeStepKey);
    if (index === 0) {
      return;
    }
    updateSteps(false);
  };

  const restart = () => {
    setSteps((prevSteps) =>
      prevSteps.map((step, index) => {
        return {
          ...step,
          isDone: index === 0
        };
      })
    );
    setActiveStep(steps[0]);
  };

  const stepProps = {
    step: activeStep,
    numSteps: steps.length,
    handleNext,
    handleBack,
    isFormValid: false
  };

  const stepComponents: Record<number, JSX.Element> = {
    1: <FirstStep {...stepProps} />,
    2: <SecondStep {...stepProps} />,
    3: <ThirdStep {...stepProps} />,
    4: <FinalStep restart={restart} />
  };

  const renderActiveStepComponent = () => (
    <FormContextProvider>
      {stepComponents[activeStepKey]}
    </FormContextProvider>
  );

  return (
    <>
      <div className="wizard">
        {steps.map((step) => {
          const stepDone = step.isDone ? "step-done" : "";
          const circleActive = activeStepKey === step.key ? "circle-active" : "";
          const stepActive = activeStepKey === step.key ? "step-active" : "";

          return (step.key < steps.length &&
            <div key={step.key} className="step">
              <div className={`circle ${stepDone} ${circleActive}`}>
                {step.key}
              </div>

              {(step.key + 1 < steps.length) && <span className="line"></span>}

              <div className={`step-name ${stepActive}`}>
                {step.label}
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="title">{title}</h1>
      <h1 className="subtitle">{subtitle}</h1>
      {renderActiveStepComponent()}
    </>
  );
};

export default Wizard;
