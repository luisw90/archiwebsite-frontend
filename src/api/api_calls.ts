import axios from "axios";
import { ArchData } from "../Types";

// export const getArchData = async () => {
//   const response = await axios(
//     `https://api.unsplash.com/search/photos?page=1&query=architecture&client_id=5237d1231297337d4db4bd521d6710d44e32dfa0f6824f00d2788f9e503fb510`
//   );
//   return response.data.results;
// };

export const getArchItems = async () => {
  const response = await axios.get("http://localhost:3001/api/arch");
  return response.data;
};

export const getOneArchItem = async (id: string) => {
  const response = await axios.get(`http://localhost:3001/api/arch/${id}`);
  return response.data;
};

export const createArchItem = (item: ArchData) => {
  return axios
    .post("http://localhost:3001/api/arch/", item)
    .catch(function (error) {
      console.error(error);
    });
};

export const updateArchItem = (item: ArchData, id: string) => {
  return axios
    .post("http://localhost:3001/api/arch/${id}", item)
    .catch(function (error) {
      console.error(error);
    });
};

export const deleteArchItem = (id: string) => {
  return axios
    .delete(`http://localhost:3001/api/arch/${id}`, {
      data: { id: id },
    })
    .catch(function (error) {
      console.error(error);
    });
};
