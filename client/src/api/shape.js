import axios from "axios";

const config = {
  headers: {
    "content-type": "multipart/form-data",
    Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`,
  },
};

export const shapes = async (data) =>
  await axios.post(`${process.env.REACT_APP_API}/shapes`, data, config);

export const getShapes = async () =>
  await axios.get(`${process.env.REACT_APP_API}/shapes`);

export const deleteShape = async (id) =>
  await axios.delete(`${process.env.REACT_APP_API}/shapes/${id}`, config);
