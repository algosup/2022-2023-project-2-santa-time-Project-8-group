async function submit() {
    // TODO: Get the form data
    let response = await fetch("/?city=paris");
    response.json().then((json) => {
        let timestamp = json["time"];
        let date = new Date(timestamp);

        // Calculate time difference
        let now = Date.now();
        let remaining = new Date(timestamp - now); // Using a date object to simplify time components extraction
        let remainingDays = remaining.getUTCMonth() * 12 + remaining.getUTCDate() - 1;
        // Note: -1 because since this is a date object, the day of the month starts at 1 and not 0

        // TODO: Update timer
        console.log(date);
        console.log(remainingDays);
        console.log(remaining.getUTCHours());
        console.log(remaining.getUTCMinutes());
        console.log(remaining.getUTCSeconds());
    });
}