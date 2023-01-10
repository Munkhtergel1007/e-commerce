import Head from "next/head";
import { useRef } from "react";
import AdminButton from "../../../Components/adminButton";
import AdminContainer from "../../../Components/adminContainer";
import AdminHeader from "../../../Components/adminHeader";
import AdminTitle from "../../../Components/adminTitle";
import { ReSellCheckBox } from "../../../Components/resellCheckBox";
import { TextInput } from "../../../Components/textInput";
import requireValueNow from "../../../utils/requireValueNow";

function CategoryEdit() {
	const name = useRef(null);
	const price = useRef(null);
	const image = useRef(null);
	const category = useRef(null);
	const department = useRef(null);
	const description = useRef(null);
	const color = useRef(null);
	const material = useRef(null);
	const size = useRef(null);

	const createProduct = () => {
		if (requireValueNow(name)) {
			return;
		}
		if (requireValueNow(price)) {
			return;
		}
		if (requireValueNow(image, "file")) {
			return;
		}
		// if (requireValueNow(category)) {
		//   return;
		// }
		// if (requireValueNow(department)) {
		//   return;
		// }
		if (requireValueNow(description)) {
			return;
		}
		if (requireValueNow(color)) {
			return;
		}
		if (requireValueNow(material)) {
			return;
		}
		if (requireValueNow(size)) {
			return;
		}

		// --------------------------------- api ---------------------------------
	};

	return (
		<>
			<Head>
				<title>Category create</title>
			</Head>
			<AdminHeader />
			<AdminContainer>
				<AdminTitle title="Category create" />
				<div>
					<TextInput
						innserRef={name}
						id="name"
						title="Name *"
						name="name"
						value=""
					/>
					<TextInput
						innserRef={price}
						id="price"
						title="Price *"
						name="price"
						type="number"
						value=""
					/>
					<TextInput
						innserRef={image}
						id="image"
						title="Image *"
						name="image"
						type="file"
						value=""
					/>
					{/* {categories?.map((data, index) => ( */}
					{/* <ReSellCheckBox title={data.name} key={index} age={"row1"} innerRef={category} /> */}
					{/* ))} */}
					{/* {department?.map((el, index) => (
            <ReSellCheckBox title={el.name} key={index} age={"row2"} innerRef={department} />
          ))} */}
					<TextInput
						innserRef={description}
						id="description"
						title="Description *"
						name="description"
						value=""
					/>
					<TextInput
						innserRef={color}
						id="color"
						title="Color *"
						name="color"
						value=""
					/>
					<TextInput
						innserRef={material}
						id="material"
						title="Material *"
						name="material"
						value=""
					/>
					<TextInput
						innserRef={size}
						id="size"
						title="Size *"
						name="size"
						value=""
					/>
				</div>
				<div className="flex gap-6 justify-end pb-8">
					<AdminButton type="save" onclick={createProduct} />
				</div>
			</AdminContainer>
		</>
	);
}

export default CategoryEdit;
