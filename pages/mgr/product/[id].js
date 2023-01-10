import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminTitle from "../../../Components/adminTitle";
import { Loading } from "../../../Components/Loading";
import { TextInput } from "../../../Components/textInput";
import useGetOneProduct from "../../../hooks/useGetOneProduct";
import Combobox from "react-widgets/Combobox";
import useGetDepartment from "../../../hooks/useDepartment";
import useGetCategories from "../../../hooks/useGetCategory";
import Select from "react-select";

function CategoryEdit() {
	const router = useRouter();
	const id = router.query.id;

	const { loading, data: product, updateId } = useGetOneProduct();
	const { loading: depLoading, data: departments } = useGetDepartment();
	const { loading: catLoading, data: categories } = useGetCategories();
	const [selectedOption, setSelectedOption] = useState(null);

	useEffect(() => {
		updateId(id);
	});

	const name = useRef(null);
	const price = useRef(null);
	const category = useRef(null);
	const department = useRef(null);
	const description = useRef(null);
	const color = useRef(null);
	const material = useRef(null);
	const size = useRef(null);

	// var departmentOptions = [{ value: "dsd" }];
	// var categories;

	// departments?.map((el) => {
	// 	departmentOptions.push({ value: el.name, _id: el?._id });
	// });
	// console.log(departmentOptions);

	const options = [
		{ value: "chocolate", id: "Chocolate" },
		{ value: "strawberry", id: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	];

	return (
		<>
			{loading ? <Loading /> : null}
			<Head>
				<title>Product edit</title>
			</Head>
			<Combobox
				defaultValue="Yellow"
				data={["Red", "Yellow", "Blue", "Orange"]}
			/>
			<AdminHeader />
			<AdminContainer>
				<AdminTitle title="Category edit" />
				<div>
					<TextInput
						innserRef={name}
						id="name"
						title="Name *"
						name="name"
						value={product?.title}
					/>
					<TextInput
						innserRef={price}
						id="price"
						title="Price *"
						name="price"
						value={product?.price}
						type="number"
					/>
					<Select
						defaultValue={selectedOption}
						onChange={setSelectedOption}
						options={options}
					/>
					{/* {categories?.map((data, index) => (
						<ReSellCheckBox title={data.name} key={index} age={"row1"} />
					))}
					{departments?.map((el, index) => (
						<ReSellCheckBox title={el.name} key={index} age={"row2"} />
					))} */}
					<TextInput
						innserRef={description}
						id="description"
						title="Description *"
						name="description"
						value={product?.description}
					/>
					<TextInput
						innserRef={color}
						id="color"
						title="Color *"
						name="color"
						value={product?.color}
					/>
					<TextInput
						innserRef={material}
						id="material"
						title="Material *"
						name="material"
						value={product?.material}
					/>
					<TextInput
						innserRef={size}
						id="size"
						title="Size *"
						name="size"
						value={product?.size}
					/>
				</div>
				<div className="flex gap-6 justify-end pb-8">
					<AdminButton type="delete" onclick={console.log(selectedOption)} />
					<AdminButton type="save" />
				</div>
			</AdminContainer>
		</>
	);
}

export default CategoryEdit;
