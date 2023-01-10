import API from ".";

export const fetGetUser = async ({ user, type }) => {
  const { data } = await API.post(
    type === "register" ? "/register" : "/login",
    user
  );
  return data;
};
