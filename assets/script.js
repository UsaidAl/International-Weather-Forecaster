function getWeather() {
    const apiKey = '5c966b41d2f0eaebc696380cb89b7dbe';
// Get user input for the city
const cityInput = document.getElementById('city');
const city = cityInput.value;

// Construct the API URL for fetching weather data
const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=6`;

// Fetch weather data from the API
fetch(apiUrl)
.then(function(response) {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})

}