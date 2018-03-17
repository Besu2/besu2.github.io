var h = document.getElementById("Fh").innerHTML;
var l = document.getElementById("Fl").innerHTML;
var s = document.getElementById("Fs").innerHTML;

h = parseInt(h);
l = parseInt(l);
s = parseInt(s);

var t = (h + l) / 2;
var w = Math.pow(s, 0.16);

var f = 35.74 + 0.6215 * t - 35.75 * w + 0.4275 * t * w;
f = f.toFixed(2);

document.getElementById("FwindChill").innerHTML = f;
