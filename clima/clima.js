const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=0327f4d119ee2f115eeb7a43bff34a3b`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}