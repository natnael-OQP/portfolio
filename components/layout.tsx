import Header from "./Header";
import Sidebar from "./Sidebar";
const Layout = ({ children }:{children: React.ReactNode }) => {
	return (
		<div className="grid w-full h-full grid-cols-12 gap-6 px-5 py-10 md:py-14 h md:px-16">
			<Header/>
			<Sidebar />
			<main className="grid p-2 bg-[#172A45] sd bl lg:col-span-9 col-span-full rounded-xl md:p-4 ">
				{children}
			</main>
		</div>
	);
};

export default Layout;
