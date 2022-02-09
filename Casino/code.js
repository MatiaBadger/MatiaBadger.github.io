function displayWelcome() {
    document.write("<h4>Welcome to the Final Boss Casino, Where dreams wont come true!<br><em>Can you get past the last level?</em></h4>")
}

function displayInstructions(){
    document.write("<p>This is how you play craps... </p><br>")
}

// enhance this function and put comments
// above each line explaning what is happening
function play() {
    var die1 = 5
    var die2 = 2
    
    var sum = die1+die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    if (sum == 7 || sum == 11)
    { document.write("CRAPS - you lose")
    document.write("<br/>")
    }
    else if (die1== die2 && die1%2 == 0)
    {
    document.write("DOUBLES - you win")
    document.write("<br/>")
    }
    
}
