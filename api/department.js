import API from ".";

export const fetchGetDepartment = async () => {
	const { data } = await API.get("/department");
	return data;
};

export const fetGetOneDeparment = async (id) => {
	const { data } = await API.post("/getOneDepartment", { _id: id });
	return data;
};
