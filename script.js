const apikey = "9e1d805a9bddf4f1fbc97fcf6b954d39";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');

const weathericons = document.querySelector('.weather_icons');

async function checkWeather(city) {

    const responce = await fetch(apiurl + city + `&appid=${apikey}`)

    if (responce.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {


        let data = await responce.json();



        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weathericons.src = "images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weathericons.src = "images/clear.png"
        } else if (data.weather[0].main == "Rain") {
            weathericons.src = "images/rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weathericons.src = "images/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weathericons.src = "images/mist.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }

}

searchbtn.addEventListener('click', () => {

    checkWeather(searchbox.value);
}
)
