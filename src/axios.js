import axios from 'axios';

/** base url to make requests to the movie database */
const instance = axios.create({
    baseUrl: 'https://api.themoviedb.org/3',
});

instance.get('')

export default instance;