import { useEffect, useState } from "react";
import { fetGetProducts } from "../api/product";

const useGetProducst = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [options, setOptions] = useState([]);

  const getProducts = (options) => {
    setLoading(true);
    fetGetProducts({ categories: options })
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

  useEffect(() => {
    getProducts(options);
  }, [options]);

  const updateFilter = (type, categoryId) => {
    if (type === "add") {
      setOptions((prev) => [...prev, categoryId]);
    } else {
      setOptions((prev) => prev.filter((el) => el !== categoryId));
    }
  };

  return { loading, product, updateFilter };
};

export default useGetProducst;
