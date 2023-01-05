import API from ".";

export const fetGetCategories = async () => {
  const { data } = await API.get("/category");
  return data;
};
