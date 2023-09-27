import axios from "axios";

export function getUser(id) {
  return axios.get(`/api/users/${id}`).then((response) => {
    return response.data;
  });
}