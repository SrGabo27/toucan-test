import { FC } from "react";
import styled from "styled-components";
import { IconHeroProps } from "./interfaces/iconHeroProps";

const Hero = styled.div<{ backgroundColor?: string }>`
  background-color: ${(props: any) => props.backgroundColor || "#fff"};
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const IconHero: FC<IconHeroProps> = ({
	imgUrl,
	svgIcon,
	title,
	description,
	descriptionFontColor,
	sign,
	span,
	backgroundColor,
}) => {
	return (
		<Hero backgroundColor={backgroundColor}>
			<div className="flex flex-col items-center justify-center w-full">
				<figure data-aos="fade-up">
					<img src={imgUrl} />
				</figure>

				<figure data-aos="fade-up">{svgIcon}</figure>

				<h3 className="text-4xl font-bold text-white mt-4 font-helvetica">
					{title}
				</h3>

				<div
					className={`text-[23px] text-center font-extralight text-[#c0c3dd] mt-6 font-worksans`}
					style={{ color: descriptionFontColor || "white" }}
					dangerouslySetInnerHTML={{ __html: description }}
				></div>

				<div className=" text-blue mt-5 flex flex-col items-center justify-center">
					<span className="font-mr-de-haviland text-[48px]">{sign}</span>

					<span className="text-[18px] font-worksans">{span}</span>
				</div>
			</div>
		</Hero>
	);
};

export default IconHero;
