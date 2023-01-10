import API from ".";

export const fetchGetDepartment = async () => {
  const { data } = await API.get("/department");
  return data;
};
