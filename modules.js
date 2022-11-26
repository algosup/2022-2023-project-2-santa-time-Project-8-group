const path = require("path");
var sunCalc = require('suncalc');

const month = 12;
const day = 24;

function GetParameters(url) {
    let parameters = {}
    let start = url.indexOf('?');
    if (start == -1) return parameters; // No parameters detected

    let split = url.slice(start+1).split('&'); // Split each argument
    for (const item of split) {
        let [key, value] = item.split('='); 
        if (value == "") continue; // Don't take into account empty values
        console.log(value);
        value = value.replace(/\+/g, "%20"); // Replace + with spaces
        console.log(value);
        parameters[key] = value;
    }

    return parameters
}

function ParamsToRequest(params) {   
    let dbURL = "http://noel.gq/api?q="
    let request = dbURL + (params["street"] != undefined ? params["street"] : "" )+ " " + (params["city"] != undefined ? params["city"] : "" ) + " " + (params["region"] != undefined ? params["region"] : "" ) + " " + (params["country"] != undefined ? params["country"] : "" ) + " " + (params["zipcode"] != undefined ? params["zipcode"] : "" )
    console.log(request);
    return request
}

async function RequestDB(req) {
    let response = await fetch(req);
    let data = await response.json();

    // console.log(data);
    // console.log(data.features);
    console.log(data.features[0].geometry.coordinates);
    return data;
};

function ParseURL(params) {
    let req = ParamsToRequest(params);
    let long, lat = RequestDB(req);
    let nadir = Nadir(long, lat);
    return nadir;
}

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

function Nadir(longitude = 47.2, latitude = 2.0){
    let year = new Date().getFullYear();
    let date = new Date(year,month-1,day);
    let height = 0;

    let times = sunCalc.getTimes(/*Date*/ date, /*Number*/ latitude, /*Number*/ longitude, /*Number (default=0)*/ height)
    return times.nadir
};
// function acting as a countdown using times.nadir
module.exports = {
    ParseURL,
    GetParameters
}