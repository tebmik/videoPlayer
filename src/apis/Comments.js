import axios from "axios";
import { KEY } from "./config";
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params: {
        part:"id,snippet",
        parentId:"UgzDE2tasfmrYLyNkGt4AaABAg",
        maxResults:5,
        key: KEY
    }
});


