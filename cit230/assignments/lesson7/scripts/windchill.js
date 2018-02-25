/*var t = 35;
var s = 5;
var f = getWindChillFactrs(t, s);

document.getElementById("windSpeed").innerHTML = s;
document.getElementById("tem").innerHTML = t;
document.getElementById("windChillFactor").innerHTML = f;

f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16;

console.log(f);

function getWindChillFactor(t, s)
{
    return
}
*/
function computeNum() {
	// Input - get input and validate if correct length and if a number
	var t = 45;
	var s = 2;
	
	// Processing - multiply by the a random number taken to the 3rd power
	var f = t + Math.pow(2, s);;
	
	// Output - output to the div and round the number value to two decimal places
	get("output").innerHTML = "The windchill is <strong>" + f.toFixed(2) + "</strong>!";
}

function get(e) { return document.getElementById(e); }