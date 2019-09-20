const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        headers: { 'x-rapidapi-key': '0099e11b28msh6b5ec5c22e9be1ep14c70fjsne6edc9fda1fa' }

    });

    const respuesta = await instance.get('?location', {
        params: {
            location: direccion
        }
    })

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = respuesta.data.Results[0];
    direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}