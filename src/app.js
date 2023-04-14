// const video = document.getElementById("background-video");

// video.addEventListener("ended", function () {
//   video.playbackRate = -1;
//   video.play();
// });

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");

  let realFeelElement = document.querySelector("#real-feel");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML =
    "Condition " + response.data.condition.description;
  realFeelElement.innerHTML =
    "Real feel " + response.data.temperature.feels_like;
  humidityElement.innerHTML =
    "Humidity " + response.data.temperature.humidity + "%";
  windElement.innerHTML = "Wind speed " + response.data.wind.speed;
}

let apiKey = "4aed709te6b3062b91dd0ccea0eofd1e";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
