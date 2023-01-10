import API from ".";

export const fetGetUser = async ({ user, type }) => {
	const { data } = await API.post(
		type === "register" ? "/register" : "/login",
		user
	);
	return data;
};

export const fetGetOneUser = async (id) => {
	const { data } = await API.post("/getOneUser", { _id: id });
	return data;
};
