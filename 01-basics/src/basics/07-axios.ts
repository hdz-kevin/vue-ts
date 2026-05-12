
import axios from "axios";
import type { GIFResponse } from "../interfaces/gif.response";

const API_KEY = "ZhnhsJwYhMTivdZSjKMH87R0GUVOG4ql";

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: API_KEY,
    }
})

// giphyApi.get<GIFResponse>('/random')
//     .then(res => console.log(res.data.data.username))
