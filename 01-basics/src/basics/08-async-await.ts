import type { GIFResponse } from "../interfaces/gif.response";
import { giphyApi } from "./07-axios";


const getImage = async () => {
    const resp = await giphyApi.get<GIFResponse>('/random');
    
    return resp.data.data.images.downsized.url;
}


console.log("\nAsync Await");
try {
    const img = await getImage();
    console.log(img);
} catch (error) {
    console.log(error);
}

console.log("\nPromises");

getImage()
    .then(console.log)
    .catch(console.log);
