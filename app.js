import sunCalc from "./sunCalc.js";

sunCalc.getTimes(/*Date*/ date, /*Number*/ latitude, /*Number*/ longitude, /*Number (default=0)*/ height)

function getSaddress() {
    let input =document.getElementById("saddress").value;
    return input
}
function getCity() {
    let input =document.getElementById("city").value;
    return input
}
function getCountry() {
    let input =document.getElementById("country").value;
    return input
}
var CountDownDate = new Date("date").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = CountDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 *24))
    var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var secondes = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("Santa_Countdown").innerHTML = days + "d" + hours + "h" + minutes + "m" + secondes + "s" ;

    if (distance < 0 ) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Santa arrived"
    }
}, 1000);
new Request("https://nominatim.openstreetmap.org/search.php?street=STREET&city=CITY&region=REGION&country=COUNTRY&format=jsonv2")