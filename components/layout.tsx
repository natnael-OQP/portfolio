import Header from "./Header";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const { pathname } = useRouter();
	return (
		<div className={`grid w-full h-full grid-cols-12 gap-y-6 md:gap-x-6 py-12  px-[8vw] md:py-14 ${pathname == "/projects" ? "md:px-7" :"md:px-16"}    sm:px-[20vw]`}>
			<Header/>
			<Sidebar />
			<main className="flex flex-col px-2 py-0 overflow-hidden bg-[#0a192f] sd bl lg:col-span-9 col-span-full rounded-xl md:px-4 relative   ">
				<Navbar/>
				{children}
			</main>
		</div>
	);
};

export default Layout;
