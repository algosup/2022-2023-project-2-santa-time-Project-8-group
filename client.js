var timer;
async function submit() {
    const form = document.getElementById('form');
    let street = form.street;
    let city = form.city;
    let region = form.region;
    let country = form.country;
    let zipcode = form.zipcode;
    let response = await fetch(`/?street=${street}&city=${city}&region=${region}&country=${country}&zipcode=${zipcode}`);
    response.json().then((json) => {
        let timestamp = json["time"];
        let date = new Date(timestamp);

            var timer = setInterval(function() {
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