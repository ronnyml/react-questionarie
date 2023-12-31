export interface Step {
  key: number
  label?: string
  title: string
  subtitle: string
  isDone: boolean
}

export interface WizardProps {
  step: Step
  numSteps: number
  handleNext?: () => void
  handleBack?: () => void
  isFormValid: boolean
}
