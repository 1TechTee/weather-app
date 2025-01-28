const apiKey = "9efeb229f52711be505b490415e60bf5";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// console.log(weatherIcon);

async function checkWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    } else {
        var data = await response.json();
        console.log(data);
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./images/mist.png"
        }
    }




    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15) + '°c';
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + 'km/hr';


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./images/mist.png"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value)
    });
    checkWeather('lagos');
}