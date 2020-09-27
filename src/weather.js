const axios = require('axios')

const requestOne = axios.get("api.openweathermap.org/data/2.5/weather?q=Paris&appid=edab0da2598bc255824562a65b53b574");
const requestTwo = axios.get("api.openweathermap.org/data/2.5/weather?q=London&appid=edab0da2598bc255824562a65b53b574");
const requestThree = axios.get("api.openweathermap.org/data/2.5/weather?q=kairouan&appid=edab0da2598bc255824562a65b53b574");

axios.
    all([requestOne, requestTwo, requestThree])
    .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
        console.log(firstResponse.data, secondResponse.data, thirdResponse.data);
    }))
    .catch(errors => {
        console.error(errors);
    });