var timer;
async function submit() {
    const form = document.getElementById('form');
    let street = form.street.value;
    let city = form.city.value;
    let region = form.region.value;
    let country = form.country.value;
    let zipcode = form.zipcode.value;
    let response = await fetch(`/?street=${street}&city=${city}&region=${region}&country=${country}&zipcode=${zipcode}`);
    response.json().then((json) => {
        let timestamp = json["time"];
        let date = Date.now(timestamp);
            if (timer == undefined) {
                clearInterval(timer);
                };
            timer = setInterval(function() {
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
                    }, 1000); 
            
    });
}