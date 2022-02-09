function myCountDownToLaunch() {
    //countdown time to count down from 10 to 1 seconds 
    var count = 10;
    var countdown = setInterval(function() {
        count--; 
        // if the countdown is 0 stop the count and display countdown complete
        if (count <=0) {
            clearInterval(countdown);
            document.getElementById("DisplayCountdown").innerHTML = "";
            document.getElementById("DisplayCountdown").innerHTML = "count done";
        }
        // if count down is 5 display 5 seconds left
        else if (count ==5 ) {
            document.getElementById("DisplayCountdown").innerHTML = "";
            document.getElementById("DisplayCountdown").innerHTML = "Half Empty or Half Full";
        }
         else {
            document.getElementById("DisplayCountdown").innerHTML = count;
        }
    }, 1000);
}
// Write a funtion when you press a start button it disables stop button
function PressedStartButton(){
    document.getElementById("myStartButton").disabled = true;
    document.getElementById("myStopButton").disabled = false;
}
// write a function when you press the stop button it disables the start button
function PressedStopButton(){
    document.getElementById("myStartButton").disabled = false;
    document.getElementById("myStopButton").disabled = true;
}
// coding beneath to attemppt audio 
window.addEventListener("DOMContentLoader", event =>{
    const audio = doument.querySelector("audio");
    audio.voulume = 0.2;
    audio.play();
});
