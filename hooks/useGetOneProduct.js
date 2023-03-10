import { useEffect, useState } from "react";
import { fetGetOneProduct } from "../api/product";

const useGetOneProduct = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [id, setId] = useState();

	const getOneProduct = (id) => {
		setLoading(true);
		fetGetOneProduct(id).then((result) => {
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
		getOneProduct(id);
	}, [id]);

	return { loading, data, updateId };
};

export default useGetOneProduct;
