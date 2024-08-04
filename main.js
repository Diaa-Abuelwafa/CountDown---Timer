inputDate = document.querySelector(".countdown input");
let days = document.querySelector(".countdown .result .days");
let hours = document.querySelector(".countdown .result .hours");
let minutes = document.querySelector(".countdown .result .minutes");
let seconds = document.querySelector(".countdown .result .seconds");

inputDate.value = "2024-01-01";

let counter = setInterval (() => {

    let dateNow = new Date();
    let dateAchieve = new Date(inputDate.value);

    if (dateAchieve > dateNow)
    {
        ms = dateAchieve - dateNow;
    }
    else
    {
        clearInterval(counter);
        ms = 0;
    }

    let daysContent = ms / (1000 * 60 * 60 * 24);
    days.innerHTML = Math.floor(daysContent) < 10 ? `0${Math.floor(daysContent)}` : Math.floor(daysContent);

    let hoursContent = ms % (1000 * 60 * 60 * 24) / (1000 * 60 * 60);
    hours.innerHTML = Math.floor(hoursContent) < 10 ? `0${Math.floor(hoursContent)}` : Math.floor(hoursContent);

    let minutesContent = ms % (1000 * 60 * 60) / (1000 * 60);
    minutes.innerHTML = Math.floor(minutesContent) < 10 ? `0${Math.floor(minutesContent)}` : Math.floor(minutesContent);

    let secondsContent = ms % (1000 * 60) / (1000);
    seconds.innerHTML = Math.floor(secondsContent) < 10 ? `0${Math.floor(secondsContent)}` : Math.floor(secondsContent);

})


