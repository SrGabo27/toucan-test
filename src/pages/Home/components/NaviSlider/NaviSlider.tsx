import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import Button from "../../../../shared/components/Button/Button";
import CustomSwipper from "../../../../shared/components/CustomSwipper/CustomSwipper";
import Hero from "../../../../shared/components/Hero/Hero";
import { INaviSliderProps } from "./interfaces/naviSliderProps";
import "./naviSliderStyles.css";

const NaviSlider: FC<INaviSliderProps> = ({ slides }) => {
  return (
    <Hero backgroundColor="var(--green-transparent)" className="max-h-[60vh]">
      <CustomSwipper bulletType="big">
        {slides.map((item, index: number) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center gap-20">
              {item.galleryType === "third" && (
                <figure className="relative left-0 top-20">
                  <img
                    className="rounded-[50%] relative border-2 border-solid border-white w-[365px] bottom-[40px]"
                    src={item.images?.firstUrl}
                    dat-aos="fade-right"
                  />
                  <img
                    className="rounded-[50%] relative border-2 bottom-36 right-16 w-[217px]"
                    src={item.images?.secondUrl}
                    dat-aos="fade-up"
                  />
                </figure>
              )}

              <div>
                <h3
                  className="font-bold text-white text-[30px] font-helvetica"
                  data-aos="fade-right"
                >
                  {item.title}
                </h3>

                <div
                  className="text-[25px] text-white mt-2 font-worksans"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  data-aos="fade-right"
                ></div>

                <a
                  href={item.actionButton?.url}
                  target="_blank"
                  data-aos="fade-up"
                >
                  <Button
                    text={item.actionButton?.text}
                    backgroundColor="var(--green)"
                    hoverColor="var(--green-600)"
                    fontSize={18}
                    borderColor="white"
                    className="mt-4"
                    data-aos="fade-up"
                  />
                </a>
              </div>

              {item.galleryType === "first" && (
                <figure className="relative top-0 left-0">
                  <img
                    className="rounded-[50%] relative border-2 border-solid border-white top-10 left-48 w-[429px] "
                    src={item.images?.firstUrl}
                    dat-aos="fade-left"
                  />
                  <img
                    className="rounded-[50%] relative border-2 bottom-36 w-[310px]"
                    src={item.images?.secondUrl}
                    dat-aos="fade-up"
                  />
                </figure>
              )}

              {item.galleryType === "second" && (
                <figure className="relative left-0 top-20">
                  <img
                    className="rounded-[50%] relative border-2 border-solid border-white w-[365px] "
                    src={item.images?.firstUrl}
                    dat-aos="fade-left"
                  />
                  <img
                    className="rounded-[50%] relative border-2 bottom-36 w-[217px] left-40"
                    src={item.images?.secondUrl}
                    dat-aos="fade-up"
                  />
                </figure>
              )}
            </div>
          </SwiperSlide>
        ))}
      </CustomSwipper>
    </Hero>
  );
};

export default NaviSlider;
