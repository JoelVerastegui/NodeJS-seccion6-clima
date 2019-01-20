const axios = require('axios');

let obtenerClima = async(lat, lon) => {
    //NO OLVIDARSE NUNCA DEL HTTP AL INICIO DE LA URL DEL REQUEST
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`);
    return resp.data.main.temp
}

module.exports = {
    obtenerClima
}