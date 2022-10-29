import axios from "axios";

export const dataPost = async (data) =>
  await axios.post(`${process.env.REACT_APP_API}/data`, data);

export const getPicture = async () => await axios.get("http://127.0.0.1:5003/svg");
