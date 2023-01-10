import { useEffect, useState } from "react";
import { fetGetOneCategory } from "../api/category";

const useGetOneCategory = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [id, setId] = useState();

	const getOneCategory = (id) => {
		setLoading(true);
		fetGetOneCategory(id).then((result) => {
			setLoading(false);
			if (!result.success) {
				alert("Aldaa garlaa");
				return;
			}
			setData(result.data);
		});
	};

	const updateId = (id) => {
		setId(id);
	};

	useEffect(() => {
		getOneCategory(id);
	}, [id]);

	return { loading, data, updateId };
};

export default useGetOneCategory;
