import { useEffect, useState } from "react";
import { fetchGetDepartment } from "../api/department";

const useGetDepartment = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	const getDepartment = () => {
		setLoading(true);
		fetchGetDepartment()
			.then((result) => {
				setLoading(false);
				if (!result.success) {
					alert("Aldaa garlaa");
					return;
				}
				setData(result.data);
			})
			.catch((err) => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getDepartment();
	}, []);

	return { loading, data };
};

export default useGetDepartment;
