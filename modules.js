var sunCalc = require('suncalc');

const month = 12;
const day = 25;

function GetParameters(url) {
    let parameters = {}
    let start = url.indexOf('?');
    if (start == -1) return parameters; // No parameters detected

    let split = url.slice(start+1).split('&'); // Split each argument
    for (const item of split) {
        let [key, value] = item.split('='); 
        if (value == "") continue; // Don't take into account empty values
        value = value.replace(/\+/g, "%20"); // Replace + with spaces
        parameters[key] = value;
    }

    return parameters
}

function ParamsToRequest(params) {   
    let dbURL = "http://noel.gq/api?q="
    let request = dbURL + (params["street"] != undefined ? params["street"] : "" )+ " " + (params["city"] != undefined ? params["city"] : "" ) + " " + (params["region"] != undefined ? params["region"] : "" ) + " " + (params["country"] != undefined ? params["country"] : "" ) + " " + (params["zipcode"] != undefined ? params["zipcode"] : "" )
    return request
}

async function RequestDB(req) {
    let response = await fetch(req);
    let data = await response.json();

    return data.features[0].geometry.coordinates;
};

async function ParseURL(params) {
    let req = ParamsToRequest(params);
    let coord = await RequestDB(req);

    let long = coord[0];
    let lat = coord[1];

    let nadir = Nadir(long, lat);
    return {"time": nadir};
}

function Nadir(longitude, latitude){
    let year = new Date().getFullYear();
    let timestamp = Date.UTC(year, month-1, day); // UTC time in miliseconds
    let date = new Date(timestamp);

    let times = sunCalc.getTimes(date, latitude, longitude);
    return times.nadir.getTime(); // UTC time in miliseconds
};

module.exports = {
    ParseURL,
    GetParameters
}