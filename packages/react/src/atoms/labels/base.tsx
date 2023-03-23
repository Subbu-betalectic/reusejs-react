import React, { ReactNode } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface LabelBaseProps {
  label?: any;
  htmlFor?: string;
  labelStyles?: any;
  variant?: string;
  labelBaseClasses?: {
    alignment?: any;
    color?: any;
    font?: any;
  };
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const LabelBase = (props: LabelBaseProps) => {
  const theme: any = useThemeContext();

  const finalClassNames = resolvedStyleProps(
    "labelBaseClasses",
    ["alignment", "color", "font"],
    props,
    theme
  );

  // hiii

  return (
    <label
      htmlFor={props.htmlFor}
      className={finalClassNames}
      style={props.labelStyles}
      onClick={(e) => props.onClick?.(e)}
    >
      {props.label}
    </label>
  );
};

export default LabelBase;
