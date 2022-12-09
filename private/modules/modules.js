var sunCalc = require('suncalc');

const month = 12;
const day = 25;
const dbURL = "http://51.144.112.142/api?q=";
const apiURL = "http://api.positionstack.com/v1/forward?access_key=9ef794721407291498b0a1bdd0a3f73a&query=";

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

function ParamsToRequest(params,url) {   
    let request = url + (params["address"] != undefined ? params["address"] : "" );
    return request
}

async function RequestDB(req) {
    let response = await fetch(req);
    let data = await response.json();
    return data
};

async function ParseURL(params) {
    let req = ParamsToRequest(params,dbURL);
    let coord = await RequestDB(req);
    let long;
    let lat;
    if (data.features[0].geometry.coordinates[0] == undefined){
        req = ParamsToRequest(params,apiURL);
        coord = await RequestDB(req);
        long = coord.data[0].longitude;
        lat = coord.data[0].latitude;
    }else{
        long = coord[0];
        lat = coord[1];
    }
    if (typeof long != 'undefined'){
        let nadir = Nadir(long, lat);
        return {"time": nadir};
    }
    
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