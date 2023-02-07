const search = document.querySelector("#search-bar");
const city = document.querySelector("#query");
const currentDay = document.querySelector("#curent-day");
const temp = document.querySelector
const weatherIcon = document.querySelector("#currentWeatherIcon");


const APIkey = "bbb60fdbf33c8e150bbde843d60e6430";

function weatherCast(e) {e.preventDefault()

let queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city.value +"&appid=bbb60fdbf33c8e150bbde843d60e6430&units=imperial";

fetch(queryURL)
    .then(function (response) {
        return response.json();
    })
    .then (data => {
        console.log(data); 
        weatherIcon.src= "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        weatherIcon.s
        
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+ data.coord.lat + "&lon="+ data.coord.lon +"&appid=bbb60fdbf33c8e150bbde843d60e6430&units=imperial")
    .then(function (response) {
        return response.json();
    })
    .then (data => {
        console.log(data); 
    }) 
    }) 

console.log("test");
}

search.addEventListener('click', weatherCast);