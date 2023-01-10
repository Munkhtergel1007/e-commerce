import Head from "next/head";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminList from "../../../Components/adminList";
import AdminTitle from "../../../Components/adminTitle";

function ProductList() {
	return (
		<>
			<Head>
				<title>Product manage</title>
			</Head>
			<AdminHeader />
			<AdminContainer>
				<AdminTitle title="Product list" />
				<div className="w-full bg-[rgba(0,0,0,.1)] p-2 border-b rounded-t-md">
					Name
				</div>
				<AdminList title="product" href="/mgr/product/{id}" />
				<div className="flex justify-end mt-8">
					<AdminButton type="create" href="/mgr/product/create" />
				</div>
			</AdminContainer>
		</>
	);
}

export default ProductList;
