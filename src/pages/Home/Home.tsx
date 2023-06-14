import { FC, useEffect } from "react";
import Hero from "../../shared/components/Hero";
import { firstHeroUrl, secondHeroUrl } from "./consts/backgroundConsts";
import "./homeStyles.css";
import Button from "../../shared/components/Button";
import NewsSlider from "./components/NewsSlider/NewsSlider";
import { news } from "./components/NewsSlider/info/newsSlides";
import IconHero from "./components/IconHero/IconHero";
import QuotationIcon from "../../shared/icons/QuotationIcon";
import Separator from "./components/Separator";
import NaviSlider from "./components/NaviSlider";
import { naviSlides } from "./components/NaviSlider/info/naviSlides";
import ContactBanner from "../../shared/components/ContactBanner/ContactBanner";

const Home: FC = () => {
  useEffect(() => {
    document.title = "Home | bluepoint2";
  }, []);

  return (
    <>
      <Hero backgroundImage={firstHeroUrl} className="h-[65vh]">
        <div className="flex flex-col items-center justify-center gap-4 w-full mr-[450px] ">
          <div>
            <p
              className="sm:text-lg lg:text-[38px] font-bold text-blue  font-helvetica !leading-10"
              data-aos="fade-right"
            >
              We’re the <br /> company that's <br /> changing the way <br /> you
              navigate your <br /> healthcare.
            </p>

            <p
              className="text-[24px] text-green  font-worksans mt-5"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              Innovative solutions that <br /> create a comfortable, <br />
              intuitive patient <br /> experience.
            </p>
          </div>
        </div>
      </Hero>

      <IconHero
        backgroundColor="var(--blue-transparent)"
        imgUrl="https://static.wixstatic.com/media/c86aa8_6f4b7cbb017b4a70913599a5034e6ea1~mv2.png/v1/fill/w_73,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AdobeStock_258163476-key-modified.png"
        title="Communication is the key."
        description={`We believe that better communication leads to better <br /> outcomes
					in healthcare. Our passion and mission are to create <br /> better
					communication between patients and care providers <br /> – it’s that
					simple.`}
      />

      <Hero
        backgroundImage={secondHeroUrl}
        className="h-[80vh] font-helvetica "
      >
        <div className="flex flex-col justify-center items-center w-full mr-[500px] p-10">
          <div>
            <h3
              className="text-blue font-bold text-[36px] leading-none"
              data-aos="fade-up"
            >
              Introducing NAVI•Services
            </h3>

            <p className="text-green text-[24px]" data-aos="fade-up">
              Fast and accurate insurance information <br /> collected from your
              patients
            </p>

            <p className="text-blue text-[19px] mt-4" data-aos="fade-up">
              NAVI•Services provides accurate insurance collection <br /> from
              your patients <strong>before their appointment</strong>. We then
              <br /> use our proprietary NAVI•pal software to deliver it to{" "}
              <br />
              your staff securely through HIPAA and HITECH <br /> compliant web
              services.
            </p>

            <div data-aos="fade-up">
              <ul className="text-blue flex flex-col gap-4 list-disc text-[18px] mt-4 pl-6">
                <li>
                  Text-based, pre-appointment insurance <br /> collection allows
                  your office to see more <br /> patients.
                </li>
                <li>
                  Patients click the link in your text message, <br /> snap a
                  photo of their insurance card and that's <br /> all they need
                  to do.
                </li>
                <li>
                  Their card image will then be sent to you <br /> through HIPAA
                  and HITECH compliant web <br /> services.
                  <b>It’s that easy!</b>
                </li>
              </ul>

              <Button
                text="Video Demo"
                fontSize={18}
                className="mt-6 ml-4"
                hoverColor="var(--green)"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </Hero>

      <NewsSlider news={news} />

      <IconHero
        backgroundColor="var(--blue-transparent)"
        imgUrl="https://static.wixstatic.com/media/c86aa8_fb7bd5fa000f4ba9ae7526484109561f~mv2.png/v1/fill/w_75,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AdobeStock_258163476-communication-modif.png"
        title="Better communication starts with NAVI"
        description={`NAVI allows patients to navigate their healthcare <br /> appointments and communicate with their care <br /> providers from <b>any mobile device.</b>`}
      />

      <IconHero
        backgroundColor="var(--white-transparent)"
        description={`Navigating your healthcare <br /> should be as easy as one tap or <br /> swipe on your mobile device.`}
        descriptionFontColor="var(--blue)"
        sign="Liderman Duin"
        span="Founder of bluepoint2"
        svgIcon={<QuotationIcon color="var(--blue)" />}
      />

      <Separator
        backgroundColor="var(--blue)"
        text="Healthcare communication for a mobile world"
      />

      <NaviSlider slides={naviSlides} />

      <Hero backgroundColor="var(--blue-transparent)">
        <div className="flex flex-col items-center justify-center w-full gap-10 p-10">
          <h2
            className="text-[36px] font-helvetica text-white font-bold align-baseline relative right-[100px]"
            data-aos="fade-in"
          >
            Healthcare providers are increasingly <br /> adopting mobile
            messaging.
          </h2>

          <div className="flex gap-16" data-aos="fade-right">
            <p className="font-helvetica text-white text-[20px] ml-auto">
              More people than ever prefer <br /> communicating through mobile
              <br />
              messaging, especially when it <br /> comes to healthcare <br />
              information. Care providers can <br /> use texting to communicate
              with <br /> patients in a more personal way <br /> through all the
              key touchpoints <br /> of the patient journey.
            </p>

            <div className="flex" data-aos="fade-left">
              <figure>
                <img
                  src="https://static.wixstatic.com/media/c86aa8_6024232ebe564e07b91410ffc3c4f8ad~mv2.png/v1/fill/w_249,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/90%25-circle-graphic.png"
                  alt=""
                />
              </figure>

              <p
                className="text-white text-[26px] font-worksans"
                data-aos="fade-left"
              >
                Increased online <br /> patient involvement <br /> can result in
                a 90% <br />
                satisfaction rate <br /> for both patients <br /> and
                physicians.
              </p>
            </div>
          </div>
        </div>
      </Hero>

      <Hero backgroundColor="var(--green-transparent)">
        <div className="flex items-center justify-center w-full gap-20 p-10">
          <figure data-aos="fade-down">
            <iframe
              width="626"
              height="351"
              src="https://player.vimeo.com/video/386648582?h=28677dd262&amp;title=0&amp;app_id=122963"
              allow="autoplay; fullscreen; picture-in-picture"
              title="NAVI Introduction and Overview"
              data-ready="true"
            ></iframe>
          </figure>

          <div className="flex flex-col gap-10 " data-aos="fade-left">
            <p className="text-white font-worksans text-[31px]">
              Watch this short <br /> video to learn how <br /> NAVI can help
              your <br /> organization.
            </p>

            <Button
              text="Request a live demo"
              backgroundColor="var(--green)"
              borderColor="white"
              hoverColor="var(--green-600)"
            />
          </div>
        </div>
      </Hero>

      <Hero backgroundColor="var(--light-blue)" className="p-10">
        <ContactBanner />
      </Hero>
    </>
  );
};

export default Home;
