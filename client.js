async function submit() {
    // TODO: Get the form data
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

        // Calculate time difference
        let now = Date.now();
        let remaining = new Date(timestamp - now); // Using a date object to simplify time components extraction
        let remainingDays = remaining.getUTCMonth() * 12 + remaining.getUTCDate() - 1;
        let remainingHours = remaining.getUTCHours();
        let remainingMinutes = remaining.getUTCMinutes();
        let remainingSeconds = remaining.getUTCSeconds();
        // Note: -1 because since this is a date object, the day of the month starts at 1 and not 0
        document.getElementById('days').innerHTML = remainingDays;
        document.getElementById('hours').innerHTML = remainingHours;
        document.getElementById('minutes').innerHTML = remainingMinutes;
        document.getElementById('seconds').innerHTML = remainingSeconds;
    });
}