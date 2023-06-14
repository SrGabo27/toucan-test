import { FC } from "react";
import { ISvgIconProps } from "./interfaces/svgIconProps";

const PhoneIcon: FC<ISvgIconProps> = ({
  width = "50",
  height = "50",
  color,
}) => (
  <svg
    width={width}
    height={height}
    fill={color}
    preserveAspectRatio="xMidYMid meet"
    data-bbox="51 2.96 141 193.94"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="51 2.96 141 193.94"
    role="presentation"
    aria-hidden="true"
  >
    <g>
      <path d="M136.1 58.9c.8 0 1.4.7 1.4 1.4V184c0 .8-.7 1.4-1.4 1.4H63.9c-.8 0-1.4-.7-1.4-1.4V60.4c0-.8.7-1.4 1.4-1.4h72.2m0-11.6H63.9c-7.1 0-12.9 5.8-12.9 12.9V184c0 7.1 5.8 12.9 12.9 12.9h72.2c7.1 0 12.9-5.8 12.9-12.9V60.4c0-7.2-5.8-13-12.9-13z"></path>
      <path d="M164.8 54.3c-2.9 0-5.4-2.2-5.7-5.2-.6-6.7-5.7-12.6-12.3-14.3-3.1-.8-4.9-4-4.1-7s4-4.9 7-4.1c11.2 2.9 19.7 13 20.8 24.3.3 3.2-2 6-5.2 6.3h-.5z"></path>
      <path d="M186.2 53.1c-3.2 0-5.7-2.6-5.8-5.7 0-15.4-11.5-29.6-26.7-33-3.1-.7-5.1-3.8-4.4-6.9s3.8-5.1 6.9-4.4C176.6 7.6 192 26.6 192 47.3c0 3.2-2.6 5.8-5.8 5.8.1 0 0 0 0 0z"></path>
      <path d="M109.7 165c0 5.357-4.343 9.7-9.7 9.7-5.357 0-9.7-4.343-9.7-9.7 0-5.357 4.343-9.7 9.7-9.7 5.357 0 9.7 4.343 9.7 9.7z"></path>
    </g>
  </svg>
);

export default PhoneIcon;