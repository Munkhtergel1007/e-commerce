import { useEffect, useState } from "react";
import { fetLogOut } from "../api/logout";

const useLogOut = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getLogOut = () => {
    setLoading(true);
    fetLogOut()
      .then((result) => {
        setLoading(false);
        if (!result.success) {
          // alert("Aldaa garlaa");
          return;
        }
        setData(result.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getLogOut();
  }, []);

  return { loading, data };
};

export default useLogOut;
