import axios from "axios";

export const getArchiImages = async () => {
  const response = await axios(
    `https://api.unsplash.com/search/photos?page=1&query=architecture&client_id=5237d1231297337d4db4bd521d6710d44e32dfa0f6824f00d2788f9e503fb510`
  );
  return response.data.results;
};

// export const saveItem = (item: UserItem, userid: string) => {
//   return axios
//     .post(`http://localhost:3001/users/${userid}`, item)
//     .catch(function (error) {
//       console.error(error)
//     })
// }

// export const deleteItem = (userid: string, itemid: string) => {
//   return axios
//     .delete(`http://localhost:3001/users/${userid}`, {
//       data: { itemid: itemid }
//     })
//     .catch(function (error) {
//       console.error(error)
//     })
// }

// export const getSavedItems = async (userid: string) => {
//   const response = await axios.get(`http://localhost:3001/users/${userid}`)
//   return response
// }
