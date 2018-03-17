var SweatherData = new XMLHttpRequest();
SweatherData.open("GET", "https://api.wunderground.com/api/cccf4eb42a498271/conditions/q/MN/Springfield.json", true);
SweatherData.send();
SweatherData.onload = function () {
    var weather = JSON.parse(SweatherData.responseText);

    console.log(weather);
    document.getElementById("Simg").src = weather.current_observation.icon_url;
    document.getElementById("Scurrent").innerHTML = weather.current_observation.icon;
    document.getElementById("Ss").innerHTML = weather.current_observation.wind_mph;
    document.getElementById("Swindchill").innerHTML = weather.current_observation.windchill_f;
    document.getElementById("Sh").innerHTML = weather.current_observation.temp_f;
    document.getElementById("Sprecipitation").innerHTML = weather.current_observation.precip_today_metric;
}

var Sweather = new XMLHttpRequest();
Sweather.open("GET", "https://api.wunderground.com/api/cccf4eb42a498271/forecast10day/q/MN/Springfield.json", true);
Sweather.send();
Sweather.onload = function () {
    var weather = JSON.parse(Fweather.responseText);
    document.getElementById("Sforecast").innerHTML = weather.forecast.txt_forecast.forecastday["0"].fcttext;
}
