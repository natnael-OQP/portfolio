import Image from "next/image";
import { LocationMarkerIcon, MailIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/solid";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
const Sidebar = () => {
	return (
		<div
			
			className=" rounded-xl bg-[#172A45] select-none w-full max-h-[550px] lg:sticky lg:top-10  col-span-full lg:col-span-3 p-4 py-12 sd br" >
			<div className="relative w-20 h-20 mx-auto overflow-hidden rounded-full bg-gray-50">
				<Image
					objectFit="cover"
					layout="fill"
					src="https://avatars.githubusercontent.com/u/81810944?v=4"
					alt="user avatar"
				/>
			</div>
			<h3 className="py-5 text-2xl font-medium tracking-wider text-center  text-[#ccd6f6]">
				Natnael <span className="text-[#64ffda]" >Abebe</span>
			</h3>
			{/* Reactjs developer  */}
			<h4 className="py-[3px] mt-1 md:mt-2 mb-4 text-sm text-[#ccd6f6]    font-semibold bg-[#303C55]  fc  rounded-full duration-500 hover:animate-bounce ">
				Reactjs/nextjs developer
			</h4>
			{/* Telegram  */}
			<a href="https://t.me/natnaelOPQ" target="_blank" className="py-2 text-[#64FFDA] fc gap-[8px] an hover:animate-pulse " rel="noreferrer">
				<BsTelegram className=" h-7 w-7" />
				<span className="sideh3">
					Via Telegram
				</span>
			</a>
			{/* git-Hub  */}
			<a href="https://github.com/natnael-OQP" target="_blank" className="py-2 text-[#64FFDA] fc an hover:animate-pulse " rel="noreferrer" >
				<AiFillGithub className=" h-7 w-7" />
				<span className="font-mono sideh3">
					My Github repo
				</span>
			</a>
			{/*address */}
			<div
				className="flex flex-col items-center gap-2 py-5 mt-10 bg-[#303C55] text-[#0A192F] rounded-lg"
				style={{
					marginLeft:'-1rem',
					marginRight:'-1rem',
				}}
			>
				<div className=" justify-end fx min-w-[70%] ">
					<LocationMarkerIcon className="h-5" />
					<span className="sideh5" >Gondar</span>
				</div>
				{/* Phone Number */}
				<a href="tel:+251941248799" className="justify-end fx min-w-[70%]">
					<PhoneIcon className="h-5" />
					<span className="sideh5" >09-41-24-87-99</span>
				</a>
				{/* Email Address */}
				<button
					onClick={() => window.open("mailto:makiya112545@gmail.com")}
					className="justify-end fx min-w-[70%]">
					<MailIcon className="h-5" />
					<span className="sideh5">makiya112545@gmail.com</span>
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
// https://t.me/natnaelOPQ
