import axios from 'axios';
const baseURL = 'https://api.themoviedb.org/3/trending/all/day?api_key='
const API_KEY = import.meta.env.VITE_API_KEY;
const getTrendingMovies = axios.get(baseURL + API_KEY)
export default { getTrendingMovies }
