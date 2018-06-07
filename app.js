const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `La temperatura en ${coors.direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo encontrar la temperatura de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


/* lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);

        clima.getClima(resp.lat, resp.lng)
            .then(tiempo => {
                console.log(tiempo);
            })
            .catch(e => console.log(e));

    })
    .catch(e => console.log(e)); */