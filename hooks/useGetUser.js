import { useEffect, useState } from "react";
import { fetGetUser } from "../api/user";

const useGetUser = (userForm, type) => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState([]);

  const getUser = () => {
    setLoading(true);
    fetGetUser(userForm, type)
      .then((result) => {
        setLoading(false);
        if (!result.success) {
          alert("Aldaa garlaa");
          return;
        }
        setToken(result.token);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getUser();
  }, [userForm]);

  return { loading, token };
};

export default useGetUser;
