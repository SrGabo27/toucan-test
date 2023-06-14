import { ReactElement } from "react";
import { ISvgIconProps } from "../../../../../shared/icons/interfaces/svgIconProps";

export interface IconHeroProps {
	imgUrl?: string;
	title?: string;
	description: string;
	descriptionFontColor?: string;
	backgroundColor: string;
	svgIcon?: ReactElement<ISvgIconProps>;
	sign?: string;
	span?: string;
}
