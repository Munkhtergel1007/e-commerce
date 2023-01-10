import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import darkLogo from "../public/img/Thrift_Logo_Dark.svg";
import whiteLogo from "../public/img/Thrift_Logo_Boutique_white.svg";
import Container from "./container";
import Link from "next/link";

export default function AdminHeader({ normal, className }) {
	return (
		<>
			<div
				className={`${className} shadow-sm top-0 left-0 w-full z-30 header bg-white`}>
				<Container>
					<div className="flex items-center h-[70px] justify-between px-0">
						<div className="block md:hidden">
							<span
								className={`${
									normal ? "text-white" : ""
								} text-2xl cursor-pointer`}
								onClick={() => setMenuOpened(true)}>
								<HiMenuAlt2 />
							</span>
						</div>
						<div className="h-6">
							<Link href="/">
								<a>
									<Image
										alt=""
										src={normal ? whiteLogo : darkLogo}
										height="25"
										width={`${normal ? "200" : "170"}`}
										className="bg-cover d-inline"
									/>
								</a>
							</Link>
						</div>
						<div className="hidden md:block">
							<ul className="flex">
								<li
									className={`${
										normal ? "text-white after:bg-white" : "text-[#252d3a]"
									} px-5 py-2 text-xl font-bold uppercase cursor-pointer relative nav-list`}>
									<Link href="/mgr/category">
										<a>Category</a>
									</Link>
								</li>
								<li
									className={`${
										normal ? "text-white after:bg-white" : "text-[#252d3a]"
									} px-5 py-2 text-xl font-bold uppercase cursor-pointer relative nav-list`}>
									<Link href="/mgr/product">
										<a>Product</a>
									</Link>
								</li>
								<li
									className={`${
										normal ? "text-white after:bg-white" : "text-[#252d3a]"
									} px-5 py-2 text-xl font-bold uppercase cursor-pointer relative nav-list`}>
									<Link href="/mgr/department">
										<a>Department</a>
									</Link>
								</li>
								<li
									className={`${
										normal ? "text-white after:bg-white" : "text-[#252d3a]"
									} px-5 py-2 text-xl font-bold uppercase cursor-pointer relative nav-list`}>
									<Link href="/mgr/user">
										<a>User</a>
									</Link>
								</li>
							</ul>
						</div>
						<div>ADMIN</div>
					</div>
				</Container>
			</div>
		</>
	);
}
