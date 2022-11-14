const http = require('node:http');
function getSaddress() {
    let input = document.getElementById("saddress").value;
    return input
}
function getCity() {
    let input = document.getElementById("city").value;
    return input
}
function getCountry() {
    let input = document.getElementById("country").value;
    return input
}
function getRegion() {
    let input = document.getElementById("region").value;
    return input
}
function getZIPCode() {
    let input = document.getElementById("zipcode").value;
    return input
}
function getLat() {
    let Lat = document.getElementsByName("lat").value;
    return Lat
}
function getLong() {
    let Long = document.getElementsByName("long").value;
    return Long
}

var CountDownDate = new Date("date").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = CountDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var secondes = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("Santa_Countdown").innerHTML = days + "d" + hours + "h" + minutes + "m" + secondes + "s";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Santa arrived"
    }
}, 1000);
function OnClick() {
    let street = getSaddress
    let city = getCity
    let region = getRegion
    let country = getCountry
    let ZIPcode = getZIPCode
    http.request(``)
    
}
module.exports = {OnClick};