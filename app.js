const { obtenerDireccion } = require('./lugar/lugar');
const { obtenerClima } = require('./clima/clima')

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;

let getInfo = async() => {
    try {

        let dir = await obtenerDireccion(argv.d);
        let clima = await obtenerClima(dir.lat, dir.lng)

        return `El clima en ${dir.direccion} es de ${clima}°C`

    } catch (e) {
        return `No se pudo determinar el clima en [${argv.d}]`
    }
}

getInfo().then(message => {
    console.log(message);
}).catch(err => console.log('Ocurrio un error: ', err));