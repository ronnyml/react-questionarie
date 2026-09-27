import type { Metric } from "web-vitals";

type ReportHandler = (metric: Metric) => void;

const isFunction = (value: unknown): value is ReportHandler => {
  return typeof value === "function";
};

const reportWebVitals = async (onPerfEntry?: ReportHandler) => {
  if (isFunction(onPerfEntry)) {
    await import("web-vitals").then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onINP(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
