import { useEffect, useState } from "react";
import { fetGetCategories } from "../api/category";

const useGetCategories = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getCategories = () => {
    setLoading(true);
    fetGetCategories().then((result) => {
      setLoading(false);
      if (!result.success) {
        alert("Aldaa garlaa");
        return;
      }
      setData(result.data);
    });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { loading, data };
};

export default useGetCategories;
