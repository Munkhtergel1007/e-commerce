import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../../Components/header";
import Container from "../../Components/container";
import { Footer } from "../../Components/footer";
import { Filter } from "../../Components/filter";
import { ClothCard } from "../../Components/clothCard";
import { SortButton } from "../../Components/sortButton";
import { SideFilterHeader } from "../../Components/sideFilterHeader";

import useGetCategories from "../../hooks/useGetCategory";
import { Loading } from "../../Components/Loading";
import useGetProducts from "../../hooks/useGetProducst";
import { useEffect } from "react";

const Gender = () => {
	const router = useRouter();
	const { type } = router.query;
	const { loading, product, updateFilter, updateSort } = useGetProducts();
	const { data: categories, loading: catLoading } = useGetCategories();

	const staticData = [
		{
			children: categories,
			name: "Category",
		},
	];
	useEffect(() => {
		updateFilter("add", type, "Department");
	}, [type]);

	return (
		<>
			{(loading || catLoading) && <Loading />}
			<Head>
				<title>
					Thrifter{" "}
					{type === "all"
						? "All"
						: type === "63b791f45f73b1c7316db542"
						? "Women`s"
						: "Men`s"}{" "}
					Clothes
				</title>
			</Head>
			<Header normal />
			<div className="mt-0 md:mt-[70px] overflow-x-hidden">
				<div className="mb-10">
					<div
						className={`bg-[#F2E7E2] relative pt-[30px] pb-[45px] ${
							type === "63b791f45f73b1c7316db542"
								? "after:bg-[#AF5731]"
								: "after:bg-[#3B4859]"
						}  after:absolute after:w-[110%] after:h-[130%] after:left-[-5%] after:top-[-30%] after:rotate-[-1deg]`}>
						<Container>
							<div className="relative z-10">
								<h1 className="tracking-[.02em] font-bold md:text-[35px] leading-[40px] text-white text-center">
									{type === "all"
										? "Boutique + All New In"
										: type === "63b791f45f73b1c7316db542"
										? "Boutique + Women`s New In"
										: "Boutique + Men`s New In"}
								</h1>
							</div>
						</Container>
					</div>
				</div>
				<Container>
					<div className="mt-7"></div>
					<div className="flex gap-4">
						<div className="hidden md:block pt-[1em] w-3/12">
							{staticData?.map((el, index) => (
								<SideFilterHeader
									key={index}
									title={el?.name}
									children={el?.children}
									updateFilter={updateFilter}
								/>
							))}
						</div>
						<div className="w-full">
							<div className="after:flex after:h-[5px] after:w-full after:border-b after:border-[#ccc] px-5 md:px-0">
								<div className="mb-5 flex md:items-center gap-1 md:mb-1 float-none md:float-right">
									<Filter />
									<span className="text-[.8em] font-medium hidden md:block">
										Sort by:
									</span>
									<SortButton updateSort={updateSort} />
								</div>
								<div>
									<span className="uppercase text-left text-[#252d3a] font-medium text-[13.6px] md:text-[16px] md:leading-[1.6]">
										{product.length} results
									</span>
								</div>
							</div>
							<div className="flex flex-wrap mt-0 md:mt-7 mb-16">
								{product?.map((data, index) => {
									return (
										<ClothCard
											loading={loading}
											catLoading={catLoading}
											img={data.img}
											title={data.title}
											price={data.price}
											href={"/products/" + data._id}
											key={index}
											data={data}
											checked={data.checked}
										/>
									);
								})}
							</div>
						</div>
					</div>
				</Container>
			</div>
			<Footer />
		</>
	);
};

export default Gender;
