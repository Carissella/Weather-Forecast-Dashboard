const button = document.querySelector("#button");
const clearButton = document.querySelector("#clear-button")
const cityInput = document.querySelector("#input");
const cityName = document.querySelector('#current-city-name');
const currentDay = document.querySelector("#current-day");
const currentDate = document.querySelector('#current-date');
const currentTemp = document.querySelector("#current-temp");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const searchHistory = document.querySelector("#search-history");
const currentWeatherIcon = document.querySelector("#currentWeatherIcon");
let today = dayjs();
$('#current-day').text(today.format('dddd, MMMM D YYYY'));


const APIkey = "bbb60fdbf33c8e150bbde843d60e6430";

function weatherCast(e) {e.preventDefault()

let queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ cityInput.value +"&appid=bbb60fdbf33c8e150bbde843d60e6430&units=imperial";

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then (data => {
        console.log(data); 
        currentWeatherIcon.src= "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        currentWeatherIcon.s
        cityName.innerHTML = data.name;
        currentDate.innerHTML = today.format('dddd, MM/D/YY');
        currentTemp.innerHTML = "Temperature: " + data.main.temp + " °F";
        humidity.innerHTML = "Humidity: " +  data.main.humidity + " %";
        wind.innerHTML = "wind speed: " + data.wind.speed + " MPH";
        
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+ data.coord.lat + "&lon="+ data.coord.lon +"&appid=bbb60fdbf33c8e150bbde843d60e6430&units=imperial")
    .then(function (response) {
        return response.json();
    })
    .then (data => {
        console.log(data); 
        let forecastInfoCard = document.querySelectorAll("#forecast-info");
        for (let i = 0; i < forecastInfoCard.length; i++) {
            forecastInfoCard[i].innerHTML = "";
            
            let forecastDate = new Date(data.list[i * 8 + 6].dt_txt);
            let dateEl = document.createElement("p");
            dateEl.textContent = forecastDate.toLocaleDateString();
            forecastInfoCard[i].appendChild(dateEl);
           
            let forecastWeatherIcon = document.createElement('img');
           forecastWeatherIcon.src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
           forecastInfoCard[i].append(forecastWeatherIcon);
           
           let forecastTemp = document.createElement('p');
           forecastTemp.textContent = "Temperature: " + data.list[i * 8 + 6].main.temp + " °F";
           forecastInfoCard[i].append(forecastTemp);
           
           let forecastWind = document.createElement('p');
           forecastWind.textContent = "Wind: " + data.list[i * 8 + 6].wind.speed + " MPH";
           forecastInfoCard[i].append(forecastWind);
           
           let forecastHumidity = document.createElement('p');
           forecastHumidity.textContent = "Humidity: " + data.list[i * 8 + 6].main.humidity + " %";
           forecastInfoCard[i].append(forecastHumidity);
    }}) 
    })}

function historyStorage () {
    searchHistory.innerHTML = ""
    for (let i = 0; i < searchHistory.length; i++) {
        clearButton.addEventListener("click", function (event){
            event.preventDefault();
            
        })
    }
}

button.addEventListener('click', weatherCast);