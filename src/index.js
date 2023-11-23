function getWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(responce.data.time * 1000);

    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML= "Tuesday 22:00";
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}$`;
    windSpeedElement.innerHTML = `$(response.data.wind.speed)km/h`;
    temperatureElement.innerHTML = Math.round(temperature);   
    }
function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];   
        

function searchCity(city) {
let apiKey = "1of0t314d94be2d47af94e3feebe0e6d";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(getWeather);
}

function handleSearchSubmit(event) {
event.preventDefault();
let searchInput = document.querySelector("#search-form-input");
    
 searchCity(searchInput.value);
}   

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
