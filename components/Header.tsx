import { useState } from "react";

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="absolute h-16 mb-1 transition duration-200 ease-in-out transform select-none  top-3 right-6">
			{open ? (
				<>
					{/*  <!------- off ----->*/}
					<span
						onClick={() => setOpen(!open)}
						className="flex items-center justify-between transition duration-200 ease-in-out transform border rounded-full cursor-pointer border-grey w-14 "
					>
						<span className="w-6 h-6 bg-white border rounded-full shadow shadow-inner border-grey"></span>
						<span> 🌜</span>
					</span>
				</>
			) : (
				<>
					{/*  <!------- on ----->*/}
					<span
						onClick={() => setOpen(!open)}
						className="flex items-center justify-between transition duration-200 ease-in-out transform border rounded-full cursor-pointer border-grey w-14 bg-green"
					>
						<span>🌞 </span>
						<span className="w-6 h-6 bg-white border rounded-full shadow-inner border-grey "></span>
					</span>
				</>
			)}
		</div>
	);
};

export default Header;
