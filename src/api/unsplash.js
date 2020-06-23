import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9NJpPzM97EUFPMoq-_mZa1mYvwIcI29_avm9D5pfjSo'
    }
});
