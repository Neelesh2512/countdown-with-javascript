const days1 = document.getElementById("days");
const hours1 = document.getElementById("hours");
const mins1 = document.getElementById("mins");
const secs1 = document.getElementById("secs");

const birthday="25 Dec 2021";
 
function countdown(){
    var presentDate = new Date;
    var date = new Date(birthday);
    var sec = ( date - presentDate )/1000;
    var days = Math.floor((sec/3600)/24);
    var hour = Math.floor((sec/3600)%24);
    var minute = Math.floor((sec/60)%60);
    var second = Math.floor(sec%60);
    // console.log(days,hour,minute,second);

    days1.innerHTML = formatTime( days);
    hours1.innerHTML = formatTime( hour);
    mins1.innerHTML = formatTime( minute);
    secs1.innerHTML = formatTime(second);
   
    
}
function formatTime(time){
    if(time<10){
        time = "0"+time;
        return time;
    }
    else{
        return time;
    }
}
function currentTime(){
    var currTime= new Date();
    console.log(currTime);

    var CT=document.getElementById("current-time");
    CT.innerHTML=currTime;
}
countdown();
currentTime();

setInterval(countdown,1000);
setInterval(currentTime,1000);