import { type StylesConfig } from "react-select";
import { type Option } from "types/option.type";

const SURFACE_ALT = "#1b1e27";
const BORDER = "#2a2e3a";
const TEXT_PRIMARY = "#f4f5f7";
const TEXT_SECONDARY = "#9aa0ae";
const ACCENT = "#a855f7";
const ACCENT_END = "#ec4899";

export const multiDropdownStyles: StylesConfig<Option, boolean> = {

  control: (styles, state) => ({
    ...styles,
    width: "100%",
    margin: "5px",
    borderRadius: "4px",
    fontFamily: "Nunito Sans",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    backgroundColor: SURFACE_ALT,
    border: `1px solid ${state.isFocused ? ACCENT : BORDER}`,
    boxShadow: state.isFocused ? `0 0 0 3px rgba(168, 85, 247, 0.25)` : "0 !important",
    "&:hover": {
      border: `1px solid ${ACCENT}`
    }
  }),
  singleValue: (styles) => ({
    ...styles,
    color: TEXT_PRIMARY
  }),
  input: (styles) => ({
    ...styles,
    color: TEXT_PRIMARY
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: SURFACE_ALT,
    border: `1px solid ${BORDER}`
  }),
  option: (styles, state) => ({
    ...styles,
    color: TEXT_PRIMARY,
    backgroundColor: state.isSelected ? ACCENT : "transparent",
    ":hover": {
      backgroundColor: state.isSelected ? ACCENT : "rgba(168, 85, 247, 0.18)"
    }
  }),
  multiValue: (styles) => ({
    ...styles,
    boxSizing: "border-box",
    background: `linear-gradient(135deg, ${ACCENT} 0%, ${ACCENT_END} 100%)`,
    borderRadius: "12px",
    gap: "2px",
    margin: "2px",
    padding: "2px"
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: "#fff",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "16px"
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: "#fff",
    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      color: "#fff"
    }
  }),
  placeholder: (styles) => ({
    ...styles,
    color: TEXT_SECONDARY
  })
};

export const errorStyles: StylesConfig<Option, boolean> = {
  control: (styles) => ({
    ...styles,
    border: `2px solid ${ACCENT_END} !important`,
    boxShadow: "0 !important",
    "&:hover": {
      boxShadow: "0 !important"
    }
  })
};
