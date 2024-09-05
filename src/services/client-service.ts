import axios from "axios";

//apikey
const apikey = import.meta.env.VITE_RAWG_API_KEY;
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: apikey
    }
});
