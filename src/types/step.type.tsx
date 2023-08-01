export type Step = {
  key: number;
  label?: string;
  title: string;
  subtitle: string;
  isDone: boolean;
};

export type StickyBarProps = {
  step: Step;
  numSteps: number;
  handleNext?: () => void;
  handleBack?: () => void;
  isFormValid: boolean;
};