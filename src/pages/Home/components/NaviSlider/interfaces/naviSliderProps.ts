export interface INaviSliderProps {
	slides: Array<INaviSlide>;
}

export interface INaviSlide {
	title: string;
	description: string;
	actionButton?: {
		url?: string;
		text?: string;
	};
	galleryType: "first" | "second" | "third";
	images?: {
		firstUrl: string;
		secondUrl: string;
	};
}
