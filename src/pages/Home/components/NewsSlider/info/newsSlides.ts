import { INewsSlide } from "../interfaces/newsSliderProps";

export const news: Array<INewsSlide> = [
  {
    title: "In the News",
    description: `Bluepoint2's product NAVI received <br /> The Healthcare Tech Outlook Top 10 <br /> 
			 Patient Communication Solution <br /> 
			 Providers of 2020. Click the button <br /> 
			 below to read the story.`,
    actionButton: {
      url: "https://communications.healthcaretechoutlook.com/vendor/bluepoint2-reengineering-patientdoctor-communication-cid-1265-mid-117.html",
      text: "Read the Story",
    },
    image: {
      url: "https://static.wixstatic.com/media/c86aa8_82046fd05e844d01a6ebe9b70d33ade0~mv2.png/v1/fill/w_244,h_305,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Magazine%20HTO.png",
      rotate: true,
    },
  },
  {
    title: "In the News",
    description: `Jon Adrian was quoted in the recent <br /> 
			issue of Net Solution's article titled 8 <br /> 
			"Digital Transformation Trends that will <br />
			Steer 2020." Click the button below to <br /> 
			read the story.`,
    actionButton: {
      text: "Read the Story",
      url: "https://www.netsolutions.com/insights/digital-transformation-trends/",
    },
    image: {
      url: "https://static.wixstatic.com/media/c86aa8_e2f93fbab85b4d9497d9fb80fe1c782b~mv2.jpeg/v1/fill/w_416,h_237,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Quote%20from%20net%20solutions.jpeg",
    },
  },
  {
    title: "In the News",
    description: `Bluepoint2 is honored to have <br /> 
			been named "A Top Emerging <br /> 
			Company to watch for its <br /> 
			innovation" by KLAS.`,
    actionButton: {
      text: "Request Whitepaper",
      url: "https://www.netsolutions.com/insights/digital-transformation-trends/",
    },
    image: {
      url: "https://static.wixstatic.com/media/c86aa8_f2054bc8190042419572e520b0282408~mv2.jpg/v1/fill/w_479,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Klas%20screen%20image.jpg",
    },
  },
];
