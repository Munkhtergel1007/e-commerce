import API from ".";

export const fetGetProducts = async ({
	departmentOptions,
	categoryOptions,
	type,
}) => {
	const { data } = await API.post("/product", {
		departmentOptions,
		categoryOptions,
		type,
	});
	return data;
};

export const fetGetOneProduct = async (id) => {
	const { data } = await API.post("/getOneProduct", { _id: id });
	return data;
};

export const fetGetAllProducts = async () => {
	const { data } = await API.get("/getAllProducts");
	return data;
};
