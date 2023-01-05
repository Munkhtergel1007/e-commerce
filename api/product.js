import API from ".";

export const fetGetProducts = async ({ categories }) => {
  const { data } = await API.post("/product", { categories });
  return data;
};
