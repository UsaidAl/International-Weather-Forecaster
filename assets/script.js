function getWeather() {
    const apiKey = '1b47b6fd66d703d426b5954ea6fc77f2';
    

    // Get user input for the city
  const cityInput = document.getElementById('city');
  const city = cityInput.value;

   // Construct the API URL for fetching weather data
   const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=6`;

    // Fetch weather data from the API
    fetch(apiUrl)
    .then(Response => Response.json())
    .then(data => {
        const weatherCard = document.getElementById('weatherCard');

        if (data.error) {
             // Display error message if there's an issue with the API request
        weatherCard.innerHTML = `<p>${data.error.message}</p>`;
    } else {
      // Extract current and forecast data from the API response
      const current = data.current;
      const forecast = data.forecast.forecastday.slice(1); // Exclude current day

      // Prepare HTML to display current weather
      let weatherHTML = '<h2>Current Weather</h2>';
        }
    })
 }