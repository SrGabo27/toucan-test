import { FC, useEffect } from "react";
import Hero from "../../shared/components/Hero/Hero";
import ContactBanner from "../../shared/components/ContactBanner/ContactBanner";
import Maps from "../../shared/components/Maps/Maps";

const Contact: FC = () => {
  useEffect(() => {
    document.title = "Contact Us | bluepoint2";
  }, []);

  return (
    <Hero backgroundColor="var(--green-transparent)" className="p-10">
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <h3
            className="text-[28px] font-helvetica text-white font-bold"
            data-aos="fade-down"
          >
            Every care center needs NAVI
          </h3>

          <figure data-aos="fade-up">
            <img src="https://static.wixstatic.com/media/c86aa8_6a3853ed9b254a31a3ddeb3b1bc399ef~mv2.jpg/v1/fill/w_752,h_189,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Profile%20background-Liderman.jpg" />
          </figure>
        </div>

        <ContactBanner showAddress={false} textColor="white" />

        <div style={{ height: "500px", width: "500px" }} data-aos="fade-up">
          <Maps />
        </div>
      </div>
    </Hero>
  );
};

export default Contact;
