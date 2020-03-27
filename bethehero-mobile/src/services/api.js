import axios from 'axios';

const api = axios.create({
    baseURL: 'meuip:3333'
});

export default api;