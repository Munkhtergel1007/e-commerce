import { useEffect, useState } from "react";
import { fetGetProducts, fetGetOneProduct } from "../api/product";

const useGetProducts = () => {
	const [loading, setLoading] = useState(false);
	const [product, setProduct] = useState([]);
	const [categoryOptions, setCategoryOptions] = useState([]);
	const [departmentOptions, setDepartmentOptions] = useState({});
	const [sortType, setSortType] = useState(0);

	const getProducts = (categoryOptions, departmentOptions, sortType) => {
		setLoading(true);
		fetGetProducts({
			categoryOptions: categoryOptions,
			departmentOptions: departmentOptions,
			type: sortType,
		})
			.then((result) => {
				setLoading(false);
				if (!result.success) {
					alert("Aldaa garlaa");
					return;
				}
				setProduct(result.data);
			})
			.catch((err) => {
				setLoading(false);
			});
	};

	const updateFilter = (type, categoryId, parentTitle) => {
		if (parentTitle === "Department") {
			if (categoryId === "all") setDepartmentOptions(null);
			else setDepartmentOptions(categoryId);
		} else {
			if (type === "add") {
				setCategoryOptions((prev) => [...prev, categoryId]);
			} else {
				setCategoryOptions((prev) => prev.filter((el) => el !== categoryId));
			}
		}
	};

	const updateSort = (type) => {
		setSortType(type);
	};

	useEffect(() => {
		getProducts(categoryOptions, departmentOptions, sortType);
	}, [categoryOptions, departmentOptions, sortType]);

	return { loading, product, updateFilter, updateSort };
};

export default useGetProducts;
