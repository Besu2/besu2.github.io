var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = '../final/data/services.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var services = request.response;


    var service = services.services[0];


    var type  = service.type;
    document.getElementById("chain").innerHTML = type;

    var hours  = service.hours;
    document.getElementById("chainTime").innerHTML = hours;

    var price = service.price;
    document.getElementById("chainPrice").innerHTML = price;





    service = services.services[1];

     type  = service.type;
    document.getElementById("flat").innerHTML = type;

 hours  = service.hours;
    document.getElementById("flatTime").innerHTML = hours;

    price = service.price;
    document.getElementById("flatPrice").innerHTML = price;



    service = services.services[2];

    type  = service.type;
    document.getElementById("brakes").innerHTML = type;

    hours  = service.hours;
    document.getElementById("brakeTime").innerHTML = hours;

    price = service.price;
    document.getElementById("brakePrice").innerHTML = price;



}
