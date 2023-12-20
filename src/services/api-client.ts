import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d0fba7a074e542c8b2ac9b632e3cf3ad",
  },
});
