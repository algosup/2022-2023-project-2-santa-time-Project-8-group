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
export {
    getSaddress,
    getCity,
    getRegion,
    getCountry,
    getZIPCode,
    getLat,
    getLong
}