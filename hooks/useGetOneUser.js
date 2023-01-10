import { useEffect, useState } from "react";
import { fetGetOneUser } from "../api/user";

const useGetOneUser = () => {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState([]);
	const [id, setId] = useState();

	const getOneUser = (id) => {
		if (id) {
			setLoading(true);
			fetGetOneUser(id).then((result) => {
				setUser(result.data);
				setLoading(false);
				if (!result.success) {
					setLoading(false);
					// alert("Aldaa garlaa");
					return;
				}
			});
		}
	};

	const updateId = (id) => {
		setId(id);
	};

	useEffect(() => {
		getOneUser(id);
	}, [id]);

	return { loading, user, updateId };
};

export default useGetOneUser;
