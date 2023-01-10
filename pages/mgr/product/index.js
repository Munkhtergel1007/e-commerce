import Head from "next/head";
import { useEffect } from "react";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminList from "../../../Components/adminList";
import AdminTitle from "../../../Components/adminTitle";
import { Loading } from "../../../Components/Loading";
import useGetAllProducts from "../../../hooks/useGetAllProducts";

function ProductList() {
	const { loading, data: products } = useGetAllProducts();

	return (
		<>
			{loading && <Loading />}
			<Head>
				<title>Product manage</title>
			</Head>
			<AdminHeader />
			<AdminContainer>
				<AdminTitle title="Product list" />
				<div className="w-full bg-[rgba(0,0,0,.1)] p-2 border-b rounded-t-md">
					Title
				</div>
				{products?.map((el, index) => (
					<AdminList
						title={el.title}
						href={"/mgr/product/" + el?._id}
						key={index}
					/>
				))}
				<div className="flex justify-end mt-8">
					<AdminButton type="create" href="/mgr/product/create" />
				</div>
			</AdminContainer>
		</>
	);
}

export default ProductList;
