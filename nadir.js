import sunCalc from "./sunCalc.js";

const month = 12
const day = 24

function Nadir(longitude, latitude){

    let year = new Date().getFullYear();
    let date = new Date(year,month-1,day);

    let times = sunCalc.getTimes(/*Date*/ date, /*Number*/ latitude, /*Number*/ longitude, /*Number (default=0)*/ height)
    return times.nadir
}
module.exports = Nadir