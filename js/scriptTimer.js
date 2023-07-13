const day = document.getElementById("day");
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const currentYear = new Date().getFullYear();

const newYear = new Date(` Jan ${currentYear + 1} 00:00:00`);
let valueDate = newYear;

document.querySelector('.button_calendar').addEventListener('click',()=> {  
    let data = document.querySelector('.date_user').value;
    let year, month, day;    
    [year, month, day]  = data.split("-") 
    valueDate = new Date(year, month-1, day).getTime(); 
});

function countdownTimer() {
    const todayDate = Date.now();

    if (valueDate < todayDate || isNaN(valueDate) ) {
        document.getElementById('tooltiptext_calendar').style.display = "block";
        document.getElementById('date_user').disabled;
    } else {
        document.getElementById('tooltiptext_calendar').style.display = "none"; 
    }

    const gap = valueDate - todayDate;
    const d = Math.floor(gap/1000/60/60/24);
    const h = Math.floor((gap/1000/60/60)%24);
    const m = Math.floor((gap/1000/60)%60);
    const s = Math.floor((gap/1000)%60);

    day.innerHTML = d < 10 ? "0" + d:d;
    hrs.innerHTML = h < 10 ? "0" + h:h;
    min.innerHTML = m < 10 ? "0" + m:m;
    sec.innerHTML = s < 10 ? "0" + s:s;
}

setInterval(countdownTimer,1000);

document.querySelector('.button_event').addEventListener('click',()=>{
    let a = document.querySelector('.event_user_text').value;
    if (a == ""){
        document.getElementById('tooltiptext_event').style.display = "block";
        document.getElementById('event_user_text').disabled;
    } else {
        document.getElementById('tooltiptext_event').style.display = "none"; 
    }
    document.getElementById('title_event').innerHTML = a;
});
