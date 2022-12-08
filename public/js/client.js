var timer;
async function submit() {
    document.forms.address.defaultValue = document.forms.address.value;
    document.forms.address.value ='Calculating...';
    const form = document.getElementById('form');
    let address = form.address.defaultValue;
    let response = await fetch(`/?address=${address}`);
    response.json().then((json) => {
        let timestamp = json["time"];
        let date = Date.now(timestamp);
            if (timer != undefined) {
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
                    document.forms.address.value = document.forms.address.defaultValue;
                    document.getElementById('presents').style.visibility = 'visible';
    });
};