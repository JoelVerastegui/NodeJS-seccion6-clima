const axios = require('axios');

let obtenerDireccion = async(address) => {

    let dir = encodeURI(address);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${dir}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);

    if (resp.data.status == 'ZERO_RESULTS') {
        throw new Error(`No hay resultados de la ciudad [${address}]`)
    }

    let resultados = resp.data.results[0]

    return {
        direccion: resultados.formatted_address,
        lat: resultados.geometry.location.lat,
        lng: resultados.geometry.location.lng
    }
}

module.exports = {
    obtenerDireccion
}