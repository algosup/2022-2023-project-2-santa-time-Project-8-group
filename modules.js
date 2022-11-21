var sunCalc = require('suncalc')

const month = 12;
const day = 24;

function getSaddress() {
    let input = document.getElementById("saddress").value;
    return input
};
function getCity() {
    let input = document.getElementById("city").value;
    return input
};
function getCountry() {
    let input = document.getElementById("country").value;
    return input
};
function getRegion() {
    let input = document.getElementById("region").value;
    return input
};
function getZIPCode() {
    let input = document.getElementById("zipcode").value;
    return input
};
function getLat() {
    let Lat = document.getElementsByName("lat").value;
    return Lat
};
function getLong() {
    let Long = document.getElementsByName("long").value;
    return Long
};
function Nadir(longitude, latitude){

    let year = new Date().getFullYear();
    let date = new Date(year,month-1,day);

    let times = sunCalc.getTimes(/*Date*/ date, /*Number*/ latitude, /*Number*/ longitude, /*Number (default=0)*/ height)
    return times.nadir
};
function OnClick() { 
    let street = getSaddress()
    let city = getCity()
    let region = getRegion()
    let country = getCountry()
    let ZIPcode = getZIPCode()

    // TODO: Request from DB
    let long = 47.2466
    let lat = 2.0710
console.log("test")
};
module.export = {
    getSaddress,
    getCity,
    getRegion,
    getCountry,
    getZIPCode,
    getLat,
    getLong,
    Nadir,
    OnClick
}