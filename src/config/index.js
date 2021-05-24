import axios from 'axios';
import md5 from 'md5';

const timeStamp = Math.floor(Date.now() / 1000);
const hash = md5(timeStamp + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY);

export const api = axios.create({
    baseURL: "http://gateway.marvel.com/v1/public/",
    params: {
        ts: timeStamp,
        apikey: process.env.REACT_APP_PUBLIC_KEY,
        hash,
        limit: 100
    },

});