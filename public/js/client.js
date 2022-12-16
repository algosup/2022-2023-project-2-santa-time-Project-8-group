var timer;
async function submit() {
    document.forms.address.defaultValue = document.forms.address.value;
    if (document.forms.address.defaultValue == "") {
        document.forms.address.placeholder = "Please enter an address";
        document.forms.address.classList.add("test");
        document.forms.address.style = "background-color: red;";
        return;
    } else {
        document.forms.address.value = 'Calculating...';
        document.forms.address.disabled = true;
        document.forms.address.classList.remove("test");
        document.forms.address.style += ";font-size: 2vh;";
    }
    const form = document.getElementById('form');
    let address = form.address.defaultValue;
    let response = await fetch(`/?address=${address}`);
    response.json().then((json) => {
        document.getElementsByClassName("presents")[0].classList.remove("show");
        let timestamp = json["time"];
        let country = "";
        let street = "";
        let region = "";
        document.forms.address.disabled = false;
        document.forms.address.value = "";
        let sanitzedAddress = stringSanitizer(document.forms.address.defaultValue); //make the address without accents to compare with the country, region and street
        let sanitzedCountry = stringSanitizer(json["country"]); //make the country without accents to compare with the address
        let sanitzedRegion = stringSanitizer(json["region"]); //make the region without accents to compare with the address
        let sanitzedStreet = stringSanitizer(json["street"]); //make the street without accents to compare with the address
        if (sanitzedAddress.search(new RegExp(sanitzedCountry,"i")) == -1) country = ", " + json["country"];
        if (sanitzedAddress.search(new RegExp(sanitzedRegion,"i")) == -1) region = ", " + json["region"];
        if (sanitzedAddress.search(new RegExp(sanitzedStreet,"i")) == -1) street = ", " + json["street"];
        if (timestamp == undefined) {
            document.forms.address.placeholder = "Address " + document.forms.address.defaultValue + " not found";
            return;
        }
        if (timer != undefined) {
            clearInterval(timer);
        };
        timer = setInterval(function () {
            let now = Date.now();
            let remaining = new Date(timestamp - now);
            let remainingDays = remaining.getUTCMonth() * 12 + remaining.getUTCDate() - 1;
            let remainingHours = remaining.getUTCHours();
            let remainingMinutes = remaining.getUTCMinutes();
            let remainingSeconds = remaining.getUTCSeconds();
            document.getElementById('days').innerHTML = remainingDays;
            document.getElementById('hours').innerHTML = remainingHours;
            document.getElementById('minutes').innerHTML = remainingMinutes;
            document.getElementById('seconds').innerHTML = remainingSeconds;
            document.getElementsByClassName("presents")[0].classList.add("show");
        }, 100);
        document.forms.address.value =  document.forms.address.defaultValue + street + region + country;
        document.forms.address.style += ";font-size: 2vh;"
    });
};

function stringSanitizer(string) {
    if (typeof string !== 'string') return '';
    return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g," ");
}