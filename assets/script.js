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
                const temperature = data.list[0].main.temp;
                const windspeed = data.list[0].wind.speed;
                const humidity = data.list[0].main.humidity;

                displayWeather(cityName, temperature, windspeed, humidity);
                addToSearchHistory(city);
            )
    }


}