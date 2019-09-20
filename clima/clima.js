const axios = require('axios');


const getClima = async(latt, long) => {
    const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/weather'

    });
    const resp = await instance.get('?', {
        params: {
            lat: latt,
            lon: long,
            appid: '161c41a67f891891066bbde9c83a2ef3',
            units: 'metric'
        }
    });

    return resp.data.main;
}


module.exports = {
    getClima
}