import type { GIFResponse } from "../interfaces/gif.response";

const API_KEY = "ZhnhsJwYhMTivdZSjKMH87R0GUVOG4ql";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
    .then((res) => res.json())
    .then((body: GIFResponse) => console.log(body.data.images.downsized_medium.url))
    .catch(console.warn);
