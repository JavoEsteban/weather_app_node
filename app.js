const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Nombre de la ciudad para obtener el clima'
    }
}).argv;

const lugar = require('./place/place');
const clima = require('./clima/clima');



const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `Clima de ${coordenadas.direccion}: \n -Temperatura mínima: ${temperatura.temp_min}\n -Temperatura máxima: ${temperatura.temp_max}`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}


getInfo(argv.direccion).then(console.log).catch(console.log);