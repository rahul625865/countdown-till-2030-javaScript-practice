const endDate = "1 January 2030 10:00 AM"
// selection
const day_section = document.getElementById("day");
const hour_section = document.getElementById("hour");
const minute_section = document.getElementById("minute");
const second_section = document.getElementById("second");
document.getElementById("time").innerText = endDate;



// final
function clock (){
    
    // get time
    let presentTime = new Date();
    let endTime = new Date(endDate);
    
    // calculation
    let diff = (endTime - presentTime) / 1000;
    let day = Math.floor((((diff / 60) / 60)) / 24);
    let hour = Math.floor((((((diff / 60) / 60)) / 24) - day) * 24);
    let minute = Math.floor((((((((diff / 60) / 60)) / 24) - day) * 24) - hour) * 60)
    let second = Math.floor((((((((((diff / 60) / 60)) / 24) - day) * 24) - hour) * 60) - minute) * 60)

    // implement
    day_section.innerText = day;
    hour_section.innerText = hour;
    minute_section.innerText = minute;
    second_section.innerText = second;
}


setInterval(clock, 1000)