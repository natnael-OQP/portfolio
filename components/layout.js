import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
	return (
		<div className=" grid grid-cols-12 w-full min-h-screen px-5 md:px-20 py-10   gap-5   ">
			<Sidebar />
			<main className="bg-slate-100 grid lg:col-span-9 col-span-full rounded-xl p-2 md:p-4 ">
				{children}
			</main>
		</div>
	);
};

export default Layout
