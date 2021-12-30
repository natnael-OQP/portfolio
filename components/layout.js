import Header from "./Header";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
	return (
		<div className=" grid w-full h-full grid-cols-12 gap-5 px-5 py-10 md:py-14 h md:px-20  ">
			<Header/>
			<Sidebar />
			<main className="grid p-2 bg-slate-100 lg:col-span-9 col-span-full rounded-xl md:p-4 ">
				{children}
			</main>
		</div>
	);
};

export default Layout;
