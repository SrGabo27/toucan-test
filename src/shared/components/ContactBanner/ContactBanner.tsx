import { FC } from "react";
import PaperPlaneIcon from "../../icons/PaperPlaneIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import "./contactBannerStyles.css";
import { IContactBannerProps } from "./interfaces/contactBannerProps";

const ContactBanner: FC<IContactBannerProps> = ({
  textColor,
  showAddress = true,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-5">
      <div
        className="flex flex-col items-center justify-center"
        style={{ color: textColor || "var(--blue)" }}
        data-aos="fade-down"
      >
        <h2 className="font-helvetica font-bold text-[36px]">Contact Us</h2>

        <p className="text-[23px] font-bold font-worksans">
          We would love to hear from you!
        </p>
      </div>

      <div className="card flex background-white items-center justify-center gap-3 bg-white p-3 flex-wrap">
        <div>
          <figure data-aos="fade-up">
            <PaperPlaneIcon color="white" width="67px" height="67px" />
          </figure>

          <p className="text-white">info@bluepoint2.com</p>
        </div>
        <div>
          <figure data-aos="fade-up">
            <PhoneIcon color="white" width="67px" height="67px" />
          </figure>

          <p className="text-white">913.735.6202</p>
        </div>
        <div>
          <figure data-aos="fade-up">
            <img
              width="65px"
              height="65px"
              src="https://static.wixstatic.com/media/c86aa8_1acd16586d1849e79af9a7f1edcbf6d3~mv2.gif"
              alt=""
            />
          </figure>

          <p className="text-white">Visit us on Linkedin</p>
        </div>
      </div>

      {showAddress && (
        <p
          className="text-[23px] font-bold text-blue font-worksans"
          data-aos="fade-up"
        >
          5440 W. 110th St, Suite 300 Overland Park, KS 66211
        </p>
      )}
    </div>
  );
};

export default ContactBanner;
