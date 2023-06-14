import { FC, useEffect } from "react";
import { ISwipperProps } from "./interfaces/swipperProps";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, Parallax } from "swiper";

// ==== Swipper styles ====
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
// ========================
import("./styles/customSwipperStyles.css");

const CustomSwipper: FC<ISwipperProps> = ({
  children,
  bulletType = "default",
}) => {
  useEffect(() => {
    if (bulletType === "big") import("./styles/bigBulletStyles.css");
    if (bulletType === "small") import("./styles/smallBulletStyles.css");
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        speed={1000}
        modules={[Navigation, Pagination, Parallax]}
        navigation={true}
        pagination={true}
        parallax={true}
        loop={true}
        className="w-full"
      >
        {children}
      </Swiper>
    </>
  );
};

export default CustomSwipper;
