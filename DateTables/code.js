function PressedStartButton(){
    document.getElementsByClassName("button").disabled = true;
    document.getElementsByClassName("button").disabled = false;
}
function PressedStopButton(){
    document.getElementsByClassName("button").disabled = false;
    document.getElementsByClassName("button").disabled = true;
}