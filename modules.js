const path = require("path");
var sunCalc = require('suncalc');

const month = 12;
const day = 24;

/*function RequestDB() {
    //need to include a call to CollectRequestData
    CollectRequestData.call
};*/

function CollectRequestData(request, response) {
    if(request.url.startsWith("/?")) {
        // User filled the form
        let result = Extract()
        response.send(result)
    }
    else {
        // Regular page
        response.sendFile(path.join(__dirname, "/website.html"))
    }
};
//function to extract the longitude and latitude from CollectRequestData and need to call Nadir
function Extract() {
    Nadir()
};

function Nadir(longitude = 47.2, latitude = 2.0){
    let year = new Date().getFullYear();
    let date = new Date(year,month-1,day);
    let height = 0;

    let times = sunCalc.getTimes(/*Date*/ date, /*Number*/ latitude, /*Number*/ longitude, /*Number (default=0)*/ height)
    return times.nadir
};
// function acting as a countdown using times.nadir
module.exports = {
    CollectRequestData
}