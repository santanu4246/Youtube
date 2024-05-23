import axios from 'axios';
import APIKEY from "./apikey";

// Function to make GET request
export const GetVideosBySearch = (query) => {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&q=${encodedQuery}&type=video&maxResults=10&part=snippet`
    return axios.get(url)
        .then(response => {
            return response.data;
        })
}