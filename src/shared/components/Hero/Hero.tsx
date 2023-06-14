import { FC } from "react";
import { IHeroProps } from "./interfaces/heroProps";
import "./heroStyles.css";

const Hero: FC<IHeroProps> = (props) => {
  const { children, backgroundImage, backgroundColor, className } = props;

  return (
    <section className="w-full">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor: `${backgroundImage ? "white" : backgroundColor}`,
        }}
        className={`w-full flex bg-no-repeat bg-cover bg-center ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default Hero;
