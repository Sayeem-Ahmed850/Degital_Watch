setInterval(function() {
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hr >= 12) {
        document.getElementById("hour").innerHTML = hr -= 12;
    }
    if (hr >= 12) {
        document.getElementById("am_pm").innerHTML = "AM";
    } else {
        document.getElementById("am_pm").innerHTML = "PM";
    }
    document.getElementById("hour").innerHTML = hr;
    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML = sec;
}, 1000);
let date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let m = months[date.getMonth()];
let d = date.getDate();
let y = date.getFullYear();

document.getElementById("month").innerHTML = m;
document.getElementById("day").innerHTML = d;
document.getElementById("year").innerHTML = y;