// const video = document.getElementById("background-video");

// video.addEventListener("ended", function () {
//   video.playbackRate = -1;
//   video.play();
// });

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let realFeelElement = document.querySelector("#real-feel");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML =
    "Condition: " + response.data.condition.description;
  realFeelElement.innerHTML =
    "Real feel: " + Math.round(response.data.temperature.feels_like);
  humidityElement.innerHTML =
    "Humidity: " + response.data.temperature.humidity + "%";
  windElement.innerHTML =
    "Wind speed: " + Math.round(response.data.wind.speed) + "km/h";
  dateElement.innerHTML = formatDate(response.data.time * 1000);
}

let apiKey = "4aed709te6b3062b91dd0ccea0eofd1e";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={city}&key=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
