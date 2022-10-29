import axios from "axios";

const config = {
  headers: {
    "content-type": "multipart/form-data",
    Authorization: `Bearer ${JSON.parse(window.localStorage.getItem("token"))}`,
  },
};

export const fonts = async (data) =>
  await axios.post(`${process.env.REACT_APP_API}/fonts`, data, config);

export const getFonts = async () =>
  await axios.get(`${process.env.REACT_APP_API}/fonts`);

export const deleteFont = async (id) =>
  await axios.delete(`${process.env.REACT_APP_API}/fonts/${id}`, config);
