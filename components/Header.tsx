import { useState } from "react";

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className=" absolute top-3 right-6 mb-1 h-16 select-none transition ease-in-out transform duration-200 ">
			{open ? (
				<>
					{/*  <!------- off ----->*/}
					<span
						onClick={() => setOpen(!open)}
						className="border rounded-full border-grey flex items-center justify-between cursor-pointer w-14 transition ease-in-out transform duration-200 "
					>
						<span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
						<span> 🌜</span>
					</span>
				</>
			) : (
				<>
					{/*  <!------- on ----->*/}
					<span
						onClick={() => setOpen(!open)}
						className="border rounded-full border-grey flex items-center cursor-pointer w-14 bg-green justify-between transition ease-in-out transform duration-200"
					>
						<span>🌞 </span>
						<span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white "></span>
					</span>
				</>
			)}
		</div>
	);
};

export default Header;
