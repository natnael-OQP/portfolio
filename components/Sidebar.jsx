import Image from "next/image";
import { LocationMarkerIcon, MailIcon } from "@heroicons/react/outline";
import { PhoneIcon } from "@heroicons/react/solid";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
const Sidebar = () => {
	return (
		<div className=" rounded-xl bg-[#212D3C] select-none w-full col-span-full lg:col-span-3 p-4 py-12">
			<div className="relative w-20 h-20 mx-auto overflow-hidden rounded-full bg-gray-50">
				<Image
					objectFit="cover"
					layout="fill"
					src="https://avatars.githubusercontent.com/u/81810944?v=4"
					alt="user avatar"
				/>
			</div>
			<h3 className="py-5 text-2xl font-medium tracking-wider text-center">
				Natnael <span>Abebe</span>
			</h3>
			{/* Reactjs developer  */}
			<h4 className="py-[3px] mt-1 md:mt-2 mb-4 text-sm font-semibold  fc bg-gray-200 rounded-full py-">
				Reactjs/nextjs developer
			</h4>
			{/* git-Hub  */}
			<a
				href="https://github.com/natnael-OQP"
				target="_blank"
				className="py-2 text-green-500 fc an "
				rel="noreferrer"
			>
				<AiFillGithub className=" h-7 w-7" />
				<span className="text-sm font-semibold text-green-400">
					My Github repo
				</span>
			</a>
			{/* Telegram  */}
			<a
				href="https://t.me/natnaelOPQ"
				target="_blank"
				className="py-2 text-green-500 fc an "
				rel="noreferrer"
			>
				<BsTelegram className=" h-7 w-7" />
				<span className="text-sm font-semibold text-green-400">
					My Github repo
				</span>
			</a>
			{/*address */}
			<div
				className="gap-1 bg-gray-200 fy items-center py-4 mt-10"
				style={{
					marginLeft: "-1rem",
					marginRight: "-1rem",
				}}
			>
				<div className="fx">
					<LocationMarkerIcon className="h-5" />
					<span>Gondar</span>
				</div>
				{/* Phone Number */}
				<a href="tel:+251941248799" className="fx">
					<PhoneIcon className="h-5" />
					<span>09-41-24-87-99</span>
				</a>
				{/* Email Address */}
				<a href="mailto:makiya112545@gmail.com" className="fx">
					<MailIcon className="h-5" />
					<span>makiya112545@gmail.com</span>
				</a>
			</div>
		</div>
	);
};

export default Sidebar;
// https://t.me/natnaelOPQ
