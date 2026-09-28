import { type StylesConfig } from "react-select";
import { type Option } from "types/option.type";

const CARD = "#ffffff";
const LINE = "#d8dee2";
const INK = "#1c2430";
const MUTED = "#667085";
const ACCENT = "#2f7d6b";
const ACCENT_WASH = "#e4efec";
const DANGER = "#c0392b";

export const multiDropdownStyles: StylesConfig<Option, boolean> = {

  control: (styles, state) => ({
    ...styles,
    width: "100%",
    minHeight: "44px",
    borderRadius: "8px",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "22px",
    backgroundColor: CARD,
    border: `1px solid ${state.isFocused ? ACCENT : LINE}`,
    boxShadow: state.isFocused ? `0 0 0 3px ${ACCENT_WASH}` : "none",
    "&:hover": {
      border: `1px solid ${ACCENT}`
    }
  }),
  singleValue: (styles) => ({
    ...styles,
    color: INK
  }),
  input: (styles) => ({
    ...styles,
    color: INK
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: CARD,
    border: `1px solid ${LINE}`,
    boxShadow: "0 8px 24px rgba(28, 36, 48, 0.12)"
  }),
  option: (styles, state) => ({
    ...styles,
    color: INK,
    backgroundColor: state.isSelected ? ACCENT : "transparent",
    ":hover": {
      backgroundColor: state.isSelected ? ACCENT : ACCENT_WASH
    }
  }),
  multiValue: (styles) => ({
    ...styles,
    boxSizing: "border-box",
    background: ACCENT_WASH,
    borderRadius: "6px",
    gap: "2px",
    margin: "2px",
    padding: "2px"
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: ACCENT,
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "16px"
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: ACCENT,
    ":hover": {
      backgroundColor: ACCENT,
      color: "#fff"
    }
  }),
  placeholder: (styles) => ({
    ...styles,
    color: MUTED
  })
};

export const errorStyles: StylesConfig<Option, boolean> = {
  control: (styles) => ({
    ...styles,
    border: `1px solid ${DANGER} !important`,
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none"
    }
  })
};
