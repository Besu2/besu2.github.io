 var main = document.querySelector('main');
 var section = document.createElement('section');
 section.className = "weatherinfo";

 var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
 var request = new XMLHttpRequest();
 request.open('GET', requestURL);
 request.responseType = 'json';
 request.send();

 request.onload = function () {
     var weather = request.response;
     weatherinfo(weather);
 }

 function weatherinfo(jsonObj) {
     var towns = jsonObj['towns'];

     for (var i = 0; i < towns.length; i++) {
         if (towns[i].name != "Placerton") {
             var div = document.createElement('div');
             div.className = "weatherdiv";
             var img = document.createElement('img');
             var h1 = document.createElement('h1');
             var p1 = document.createElement('p');
             var p2 = document.createElement('p');
             var p3 = document.createElement('p');
             var p4 = document.createElement('p');

             if (towns[i].name == "Springfield")
                 img.setAttribute("src", "images/weather2.jpg");
             else if (towns[i].name == "Franklin")
                 img.setAttribute("src", "images/weather3.jpg");
             else if (towns[i].name == "Greenville")
                 img.setAttribute("src", "images/weather4.jpg");

             h1.textContent = towns[i].name;
             p1.textContent = "Motto:" + towns[i].motto;
             p2.textContent = "Year Founded:" + towns[i].yearFounded;
             p3.textContent = "Current Population:" + towns[i].currentPopulation;
             p4.textContent = "Average Rainfall:" + towns[i].averageRainfall;

             div.appendChild(img);
             div.appendChild(h1);
             div.appendChild(p1);
             div.appendChild(p2);
             div.appendChild(p3);
             div.appendChild(p4);
             section.appendChild(div);
         }
     }
     main.appendChild(section);
 }
