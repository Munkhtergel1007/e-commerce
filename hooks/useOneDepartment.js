import { useEffect, useState } from "react";
import { fetGetOneDeparment } from "../api/department";
import { fetGetOneProduct } from "../api/product";

const useGetOneDepartment = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [id, setId] = useState();

	const getOneDeparment = (id) => {
		setLoading(true);
		fetGetOneDeparment(id).then((result) => {
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
		getOneDeparment(id);
	}, [id]);

	return { loading, data, updateId };
};

export default useGetOneDepartment;
