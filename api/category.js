import API from ".";

export const fetGetCategories = async () => {
	const { data } = await API.get("/category");
	return data;
};
export const fetGetOneCategory = async (id) => {
	const { data } = await API.post("/getOneCategory", { _id: id });
	return data;
};
