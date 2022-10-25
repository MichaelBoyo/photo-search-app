import axios from "axios";
const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
export const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
  // params: {
  //   client_id : ACCESS_KEY
  // }
});
