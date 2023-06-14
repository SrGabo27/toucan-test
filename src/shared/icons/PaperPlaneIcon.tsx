import { FC } from "react";
import { ISvgIconProps } from "./interfaces/svgIconProps";

const PaperPlaneIcon: FC<ISvgIconProps> = ({
  width = "50",
  height = "50",
  color,
}) => (
  <svg
    width={width}
    height={height}
    fill={color}
    preserveAspectRatio="xMidYMid meet"
    data-bbox="1.438 1 81.176 51.036"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="1.438 1 81.176 51.036"
    role="presentation"
    aria-hidden="true"
  >
    <g>
      <path d="M82.4 1.9c-.2-.6-.8-.9-1.4-.9L2.9 3.6c-.7 0-1.2.4-1.4 1.1-.2.6.1 1.2.7 1.6l18.6 11.2-8 13.2c-.3.5-.3 1.1 0 1.6s.7.7 1.4.7l13.8-.9 4.4 18.8c.1.5.5 1 1.1 1.1.5.1 1.1 0 1.5-.4l47.3-48c.4-.6.4-1.1.1-1.7zM8.1 6.4l63.6-2.1-47.6 11.9c-.1-.2-.3-.3-.5-.5L8.1 6.4zm8.8 23.4l7.3-12c.1-.2.2-.4.2-.6L77 4.2 30.1 29.4c-.3-.2-.6-.4-1-.4H29l-12.1.8zm17.7 17.7l-4-17.3L75.4 6.1 34.6 47.5z"></path>
    </g>
  </svg>
);

export default PaperPlaneIcon;
