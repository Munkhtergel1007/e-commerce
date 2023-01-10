import API from ".";
import jwt from "jwt-decode";

export const fetGetWishList = async () => {
	const { data } = await API.post("/getWishList", {
		user: jwt(window.localStorage.getItem("token")).id,
	});
	return data;
};
