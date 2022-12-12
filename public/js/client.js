var timer;
async function submit() {
    document.forms.address.defaultValue = document.forms.address.value;
    if(document.forms.address.defaultValue == ""){
        document.forms.address.placeholder = "Please enter an address";
        document.forms.address.classList.add("test");
        document.forms.address.style = "background-color: red;";
        return;
    }else{
        document.forms.address.value ='Calculating...';
        document.forms.address.classList.remove("test");
        document.forms.address.style += ";font-size: medium;";
    }
    const form = document.getElementById('form');
    let address = form.address.defaultValue;
    let response = await fetch(`/?address=${address}`);
    response.json().then((json) => {
        // console.log(json)
        document.getElementsByClassName("presents")[0].classList.remove("show");
        let timestamp = json["time"];
        if(timestamp==undefined){
            document.forms.address.placeholder = "Address " + document.forms.address.defaultValue + " not found";
            return;
        }
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
                    document.getElementsByClassName("presents")[0].classList.add("show");
                    }, 100); 
                    document.forms.address.value = json["country"] + ", " + document.forms.address.defaultValue;
    });
};