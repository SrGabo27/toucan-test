import { FC } from "react";
import Hero from "../../../../shared/components/Hero/Hero";
import CustomSwipper from "../../../../shared/components/CustomSwipper/CustomSwipper";
import { SwiperSlide } from "swiper/react";
import Button from "../../../../shared/components/Button";
import { INewsSliderProps } from "./interfaces/newsSliderProps";
import "./newsSliderStyles.css";

const NewsSlider: FC<INewsSliderProps> = ({ news }) => {
  return (
    <Hero backgroundColor="var(--green-transparent)" className="h-[60vh]">
      <CustomSwipper bulletType="small">
        {news.map((item, index: number) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center gap-20">
              <div>
                <h3
                  className="font-bold text-white text-[40px] font-helvetica"
                  data-aos="fade-right"
                >
                  {item.title}
                </h3>

                <div
                  className="text-[28px] text-white mt-2 font-worksans"
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

              <figure data-aos="fade-left">
                <img
                  className={`${
                    item.image?.rotate && "rotate-12"
                  } border-black border-2 magazine-shadow`}
                  src={item.image?.url}
                  alt={item.image?.alt}
                />
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </CustomSwipper>
    </Hero>
  );
};

export default NewsSlider;
