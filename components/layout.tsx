import Header from "./Header";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FadeUpRight, SpringFadeUp } from "../motion";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const { pathname } = useRouter();
	return (
		<div className={`grid w-full h-full grid-cols-12 gap-y-6 md:gap-x-6 py-12  px-0 md:py-14 ${pathname == "/projects" ? "md:px-7" :"md:px-16"}    sm:px-[20vw]`}>
			{/* <Header/> */}
			<Sidebar />
			<motion.main
				variants={SpringFadeUp}
				initial="initial"
				animate="animate"
				className="flex flex-col px-2 py-0 overflow-hidden bg-[#0a192f] sm:sd bl lg:col-span-9 col-span-full sm:rounded-xl md:px-4 relative scrollbar-hide  ">
				<Navbar/>
				{children}
			</motion.main>
		</div>
	);
};

export default Layout;
