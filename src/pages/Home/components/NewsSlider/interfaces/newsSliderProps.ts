export interface INewsSliderProps {
	news: Array<INewsSlide>;
}

export interface INewsSlide {
	title: string;
	description: string;
	image?: {
		url: string;
		rotate?: boolean;
		alt?: string;
	};
	actionButton?: {
		url?: string;
		text?: string;
	};
}
