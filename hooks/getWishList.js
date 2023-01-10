import { useEffect, useState } from "react";
import { fetGetWishList } from "../api/wishList";

const useGetWishList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getWishList = () => {
    setLoading(true);
    fetGetWishList().then((result) => {
      setLoading(false);
      if (!result.success) {
        alert("Aldaa garlaa");
        return;
      }
      setData(result.data);
    });
  };

  useEffect(() => {
    getWishList();
  }, []);

  return { loading, data };
};

export default useGetWishList;
