import axios from 'axios';

const KEY = 'AIzaSyBsQiL8thFxssh8xFlzXDMhg15t9vUxySc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
