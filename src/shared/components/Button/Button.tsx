import { FC, useRef, useState } from "react";
import { IButtonProps } from "./interfaces/buttonProps";

const Button: FC<IButtonProps> = ({
  text,
  fontSize,
  className,
  borderColor,
  hoverColor,
  backgroundColor = "var(--blue)",
}) => {
  let [backgroundColorState, setBackgroundColor] = useState(
    backgroundColor || undefined
  );

  const buttonRef = useRef<HTMLButtonElement>(null);

  const mouseEnter = () => {
    if (hoverColor) setBackgroundColor(hoverColor);
  };

  const mouseLeave = () => {
    setBackgroundColor(backgroundColor);
  };

  return (
    <button
      ref={buttonRef}
      className={`text-white px-8 py-2 rounded-[30px]  transition-[3s] ${className}`}
      style={{
        fontSize: fontSize,
        backgroundColor: backgroundColorState,
        borderColor: borderColor,
        border: "solid 1px",
      }}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
