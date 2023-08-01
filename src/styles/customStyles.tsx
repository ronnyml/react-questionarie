import { StylesConfig } from "react-select";
import { Option } from "../types/option.type";

export const multiDropdownStyles: StylesConfig<Option, true> = {
  control: (styles, state) => ({
    ...styles,
    width: "425px",
    margin: "5px",
    borderRadius: "4px",
    fontFamily: "Nunito Sans",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    border: "1px solid #CBCDD3",
    boxShadow: "0 !important",
    "&:hover": {
      border: "0 !important",
    },
    filter:
      "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
  }),
  option: (styles, state) => ({
    ...styles,
    color: "#58423A",
    backgroundColor: state.isSelected ? "#DCA592" : "white",
    ":hover": {
      backgroundColor: "#DCA592"
    }
  }),
  multiValue: (styles) => ({
    ...styles,
    boxSizing: "border-box",
    background: "#F8EDE9",
    borderRadius: "12px",
    gap: "2px",
    margin: "2px",
    padding: "2px",
    ":hover": {
      backgroundColor: "#DCA592"
    }
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: "#58423A",

    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "16px",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    ":hover": {
      backgroundColor: "#DCA592"
    }
  })
};

export const errorStyles: StylesConfig<Option, true> = {
  control: (styles) => ({
    ...styles,
    border: "3px solid #DCA592 !important",
    boxShadow: "0 !important",
    "&:hover": {
      boxShadow: "0 !important",
    }
  })
};
