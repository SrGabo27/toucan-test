import { FC } from "react";
import { IMainLayoutProps } from "./interfaces/mainLayoutProps";
import Navbar from "../shared/components/Navbar";
import Footer from "../shared/components/Footer/Footer";

const Layout: FC<IMainLayoutProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			<main> {children} </main>
			<Footer />
		</>
	);
};

export default Layout;
