import { useEffect, useState } from "react";
import { fetGetAllProducts } from "../api/product";

const useGetAllProducts = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const getAllProducts = () => {
		setLoading(true);
		fetGetAllProducts().then((result) => {
			setLoading(false);
			if (!result.success) {
				alert("Aldaa garlaa");
				return;
			}
			setData(result.data);
		});
	};

	useEffect(() => {
		getAllProducts();
	}, []);

	return { loading, data };
};

export default useGetAllProducts;
