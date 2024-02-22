// How do we grab reference to an HTML element (the HTML page we are connected to)
//var cityName = document.getElementById('city');
// var cityName = document.querySelector('#city');


function getWeather() {
    const apiKey = '4ddeea98d58eacc28a63a689e6c76c60';
    const cityInput = document.getElementById('city');
    const city = cityInput.value;
    console.log("City name: ", city);
    // const forecastApiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=6`;
    // const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    const currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    // Fetch CURRENT weather data from the API
    fetch(currentWeatherApi)  // fetch is makeing an ASYNC GET request 
        .then(function(response) {
            console.log("Response: ", response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(data) {
            console.log("Data: ", data);
            console.log("Type: ", typeof data);
          
           // displayWeather(data);
            //displayForecast(data);
        })
        .catch(function(error) {
            console.error('Error fetching weather data:', error);
            displayError('Failed to fetch weather data. Please try again later.');
        });


    // Fetch FORECAST weather data from the API
    fetch(forecastApiUrl)  // fetch is makeing an ASYNC GET request 
        .then(function(response) {
            console.log("Response: ", response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(data) {
            console.log("Data: ", data);
            console.log("Type: ", typeof data);
            
           // displayWeather(data);
            //displayForecast(data);
        })
        .catch(function(error) {
            console.error('Error fetching weather data:', error);
            displayError('Failed to fetch weather data. Please try again later.');
        });
}
