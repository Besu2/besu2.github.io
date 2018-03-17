var GweatherData = new XMLHttpRequest();
GweatherData.open("GET", "https://api.wunderground.com/api/cccf4eb42a498271/conditions/q/CA/Greenville.json", true);
GweatherData.send();
GweatherData.onload = function () {
    var weather = JSON.parse(GweatherData.responseText);

    console.log(weather);
    document.getElementById("Gimg").src = weather.current_observation.icon_url;
    document.getElementById("Gcurrent").innerHTML = weather.current_observation.icon;
    document.getElementById("Gs").innerHTML = weather.current_observation.wind_mph;
    document.getElementById("Gwindchill").innerHTML = weather.current_observation.windchill_f;
    document.getElementById("Gh").innerHTML = weather.current_observation.temp_f;
    document.getElementById("Gprecipitation").innerHTML = weather.current_observation.precip_today_metric;
}

var Sweather = new XMLHttpRequest();
Gweather.open("GET", "https://api.wunderground.com/api/cccf4eb42a498271/forecast10day/q/CA/Greenville.json", true);
Gweather.send();
Gweather.onload = function () {
    var weather = JSON.parse(Gweather.responseText);
    document.getElementById("Gforecast").innerHTML = weather.forecast.txt_forecast.forecastday["0"].fcttext;
}
