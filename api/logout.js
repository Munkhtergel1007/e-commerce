import API from ".";

export const fetLogOut = async () => {
  const { data } = await API.post("/logout");
  return data;
};
