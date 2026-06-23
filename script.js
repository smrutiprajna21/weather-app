const weatherData = {

    Bhubaneswar: {
        temperature: "32°C",
        weather: "Sunny",
        humidity: "60%",
        wind: "12 km/h"
    },

    Cuttack: {
        temperature: "31°C",
        weather: "Cloudy",
        humidity: "65%",
        wind: "10 km/h"
    },

    Puri: {
        temperature: "30°C",
        weather: "Rainy",
        humidity: "80%",
        wind: "15 km/h"
    },

    Delhi: {
        temperature: "38°C",
        weather: "Hot",
        humidity: "40%",
        wind: "8 km/h"
    },

    Mumbai: {
        temperature: "29°C",
        weather: "Rainy",
        humidity: "85%",
        wind: "18 km/h"
    }
};

function getWeather(){

    let city =
    document.getElementById("city").value;

    city = city.trim();

    const result =
    document.getElementById("weather-result");

    if(weatherData[city]){

        result.innerHTML = `
            <h2>${city}</h2>
            <p><strong>Temperature:</strong> ${weatherData[city].temperature}</p>
            <p><strong>Weather:</strong> ${weatherData[city].weather}</p>
            <p><strong>Humidity:</strong> ${weatherData[city].humidity}</p>
            <p><strong>Wind Speed:</strong> ${weatherData[city].wind}</p>
        `;
    }
    else{

        result.innerHTML = `
            <h2>City Not Found</h2>
            <p>Please enter:</p>
            <p>Bhubaneswar, Cuttack, Puri, Delhi or Mumbai</p>
        `;
    }
}