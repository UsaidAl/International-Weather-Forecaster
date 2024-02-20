function getWeather() {
    const apiKey = '1b47b6fd66d703d426b5954ea6fc77f2';
    

    // Get user input for the city
  const cityInput = document.getElementById('city');
  const city = cityInput.value;

   // Construct the API URL for fetching weather data
   const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=6`;

}