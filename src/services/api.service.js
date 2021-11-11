import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://ddragon.leagueoflegends.com/cdn/11.22.1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default instance;
