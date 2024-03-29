function getWeather() {
    const apiKey = '4ddeea98d58eacc28a63a689e6c76c60';
    const cityInput = document.getElementById('city');
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    const weatherCard = $('#weatherCard');
    const forecastCard = $('#forecastCard');
    const searchList = $('#searchList');

    function getWeather() {
        const city = $('#city').val();
        const currentWeatherApi = `${apiUrl}?q=${city}&appid=${apiKey}`;

        fetch(currentWeatherApi)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(function (data) {
                const cityName = data.city.name;
                const temperature = (data.list[0].main.temp - 273.15).toFixed(2);
                const windspeed = data.list[0].wind.speed;
                const humidity = data.list[0].main.humidity;

                displayWeather(cityName, temperature, windspeed, humidity);
                addToSearchHistory(city);
            
                const lat = data.city.coord.lat;
                const lon = data.city.coord.lon;
    
                // Fetch the 5-day forecast using the latitude and longitude
                const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
                return fetch(forecastApiUrl);
            })
            .then(function (forecastResponse) {
                if (!forecastResponse.ok) {
                    throw new Error('Network response was not ok for forecast');
                }
                return forecastResponse.json();
            })
            .then(function (forecastData) {
                displayForecast(forecastData);
            })
    
                
                .catch(function (error) {
                    console.error('Error fetching weather data:', error);
                    alert('Failed to fetch weather data. Please try again later.');
                });
        }

        function displayWeather(cityName, temperature, windspeed, humidity) {
            const weatherInfo = `
                <h2>${cityName}</h2>
                <p>Temperature: ${temperature} °C</p>
                <p>Wind Speed: ${windspeed} m/s</p>
                <p>Humidity: ${humidity} %</p>
            `;
            weatherCard.html(weatherInfo);
        }
    

        function addToSearchHistory(city) {
            const listItem = $('<li>');
            listItem.text(city);
            searchList.append(listItem);
        }
    
        // Call getWeather when the button is clicked
        $('.btn').click(getWeather);

        function displayForecast(forecastData) {
            const forecastCard = $('#forecastCard');
            forecastCard.empty(); // Clear previous forecast data
        
            for (let i = 0; i < forecastData.list.length; i += 8) {
                const forecastItem = forecastData.list[i];
                const date = new Date(forecastItem.dt * 1000); // Convert timestamp to date
        
            // Convert temperature to degrees Celsius
            const tempCelsius = (forecastItem.main.temp - 273.15).toFixed(2);

                 // Get weather icon URL
        const iconCode = forecastItem.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

        const forecastInfo = `
            <div class="forecast-item">
                <p>Date: ${date.toDateString()}</p>
                <img src="${iconUrl}" alt="Weather Icon">
                <p>Temperature: ${tempCelsius} °C</p>
                <p>Wind Speed: ${forecastItem.wind.speed} m/s</p>
                <p>Humidity: ${forecastItem.main.humidity}%</p>
            </div>
        `;

        forecastCard.append(forecastInfo);
    }
    
}

}