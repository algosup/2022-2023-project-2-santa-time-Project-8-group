import sunCalc from "./sunCalc.js";

function Nadir() {
    let longitude = getLong;
    let latitude = getLat;
    let date = new Date("2022,12,24");
    sunCalc.getTimes(/*Date*/ date, /*Number*/ latitude, /*Number*/ longitude, /*Number (default=0)*/ height)

}