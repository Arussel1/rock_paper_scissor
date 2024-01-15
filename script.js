let PlayerScore = 0;
let ComputerScore = 0;
const ComputerChoices = ["Rock","Paper","Scissor"];
const ComputerWins = {
    "Rock":"Scissor",
    "Scissor":"Paper",
    "Paper":"Rock"
}

function play(PlayerChoice){
    if(PlayerScore == 7 || ComputerScore == 7){
        PlayerScore = 0;
        ComputerScore = 0;
        document.getElementById("cscore").innerText = ComputerScore;
        document.getElementById("pscore").innerText = PlayerScore;
    }
    let ComputerChoice = ComputerChoices[Math.floor(Math.random() * 3)];
    if(PlayerChoice == ComputerChoice){
        document.getElementById("displaytext").innerText = ComputerChoice + " vs " + PlayerChoice + ". It's a tie";
        document.getElementById("displaytext").style.color = "red";
    }else{
        if(ComputerWins[ComputerChoice] == PlayerChoice){
            document.getElementById("displaytext").innerText = ComputerChoice + " vs " + PlayerChoice +  ". Computer gets 1 point";
            ComputerScore++;
            document.getElementById("cscore").innerText = ComputerScore;
        }else{
            document.getElementById("displaytext").innerText = ComputerChoice + " vs " + PlayerChoice + ". Player gets 1 point";
            document.getElementById("displaytext").style.color = "green";
            PlayerScore++;
            document.getElementById("pscore").innerText = PlayerScore;
        }
    }
    if(ComputerScore == 7){
        document.getElementById("displaytext").innerText = "Computer Win. Play again by clicking the button below";
        
    }else if(PlayerScore == 7){
        document.getElementById("displaytext").innerText = "Player Win. Play again by clicking the button below";
    }
}