import { Step } from "types/step.type";

export const stepsData: Step[] = [
  {
    key: 1,
    label: "Personal info",
    title: "Personal information",
    subtitle: "Tell us about yourself.",
    isDone: true
  },
  {
    key: 2,
    label: "Provider info",
    title: "Provider information",
    subtitle: "Tell us about your practice.",
    isDone: false
  },
  {
    key: 3,
    label: "Contact info",
    title: "Contact information",
    subtitle: "",
    isDone: false
  },
  {
    key: 4,
    title: "Thanks",
    subtitle: "Congratulations! You have completed the questionnaire.",
    isDone: false
  }
];
