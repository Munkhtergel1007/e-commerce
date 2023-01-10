import Image from "next/image";
import BannerImage from "../public/img/banner-image.webp";
import Container from "./container";
import Button from "./button";
import { BannerTitle } from "./bannerTitle";
import API from "../api";
import { Loading } from "./Loading";
import useGetDepartment from "../hooks/useDepartment";

export default function Banner() {
	const { data: department, loading: depLoading } = useGetDepartment();
	const checkAuth = async () => {
		await API.post("/checkAuth")
			.then((result) => {
				console.log(result);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<div className="mb-[-6px] md:mb-0 md:h-screen banner-bg-image">
			{depLoading ? <Loading /> : null}
			<div className="block md:hidden">
				<Image className="" src={BannerImage} alt="" />
			</div>
			<Container>
				<div className="h-full w-full justify-center flex-col hidden md:flex banner-title-anime">
					<BannerTitle
						title={[
							"Explore our huge range of",
							<br key="1" />,
							"quality second-hand fashion.",
						]}
					/>
					<div className="flex gap-2 mt-8">
						{department?.map((el, index) => (
							<Button
								title={"Shop" + " " + el?.name}
								href={"/market/" + el?._id}
							/>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
}
