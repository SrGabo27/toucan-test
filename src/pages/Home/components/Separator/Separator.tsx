import { FC } from "react";
import { ISeparatorProps } from "./interfaces/separatorProps";

const Separator: FC<ISeparatorProps> = ({ text, backgroundColor }) => {
  return (
    <div
      className="w-full h-[13vh] flex justify-center items-center"
      style={{ backgroundColor: backgroundColor }}
    >
      <span
        className="text-white text-[20px] sm:text-[38px] font-bold font-helvetica"
        data-aos="fade-down"
      >
        {text}
      </span>
    </div>
  );
};

export default Separator;
