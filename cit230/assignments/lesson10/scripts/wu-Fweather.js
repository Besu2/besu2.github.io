var FweatherData = new XMLHttpRequest();
FweatherData.open("GET", "https://api.wunderground.com/api/cccf4eb42a498271/conditions/q/MN/Franklin.json", true);
FweatherData.send();
FweatherData.onload = function () {
    var weather = JSON.parse(FweatherData.responseText);

    console.log(weather);
    document.getElementById("Fimg").src = weather.current_observation.icon_url;
    document.getElementById("Fcurrent").innerHTML = weather.current_observation.icon;
    document.getElementById("Fs").innerHTML = weather.current_observation.wind_mph;
    document.getElementById("Fwindchill").innerHTML = weather.current_observation.windchill_f;
    document.getElementById("Fh").innerHTML = weather.current_observation.temp_f;
    document.getElementById("Fprecipitation").innerHTML = weather.current_observation.precip_today_metric;
}

var Fweather = new XMLHttpRequest();
Fweather.open("GET", "https://api.wunderground.com/api/cccf4eb42a498271/forecast10day/q/MN/Franklin.json", true);
Fweather.send();
Fweather.onload = function () {
    var weather = JSON.parse(Fweather.responseText);
    document.getElementById("Fforecast").innerHTML = weather.forecast.txt_forecast.forecastday["0"].fcttext;
}
