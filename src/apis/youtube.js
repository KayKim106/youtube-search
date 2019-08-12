import axios from 'axios'

const KEY = 'AIzaSyCuCztT7noHLHwruJDIPuZtwuUWzXe9o9o';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults : 5,
        key : KEY
    }
});
