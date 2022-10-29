import axios from "axios";

const config = {
  headers: {
    "content-type": "multipart/form-data",
    Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`,
  },
};

export const palettes = async (data) =>
  await axios.post(`${process.env.REACT_APP_API}/palettes`, data, config);

export const getPalettes = async () =>
  await axios.get(`${process.env.REACT_APP_API}/palettes`);

export const deletePalette = async (id) =>
  await axios.delete(`${process.env.REACT_APP_API}/palettes/${id}`, config);
