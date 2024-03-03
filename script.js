

var playerScore=0;
var computerScore=0;

var playerImages = [
    'rock.png',
    'paper.png',
      'scissors.png',
];

var computerImages = [
    'rock.png',
    'paper.png',
    'scissors.png',
];

var getPlayer = document.getElementById("player");
var getComputer = document.getElementById("computer");

var getRockBtn = document.getElementById("rockBtn");
var getPaperBtn = document.getElementById("paperBtn");
var getScissorBtn = document.getElementById("scissorBtn");

var playerChoice = null;

getRockBtn.addEventListener("click", function() {
    playerChoice = playerImages[0];
    getPlayer.setAttribute("src", playerImages[0]);
    evaluateResult();
});

getPaperBtn.addEventListener("click", function() {
    playerChoice = playerImages[1];
    getPlayer.setAttribute("src", playerImages[1]);
    evaluateResult();
});

getScissorBtn.addEventListener("click", function() {
    playerChoice = playerImages[2];
    getPlayer.setAttribute("src", playerImages[2]);
    evaluateResult();
});

function evaluateResult() {
    if (playerChoice !== null) {
        var index = Math.floor(Math.random() * computerImages.length);
        var computerChoice = computerImages[index];
        getComputer.setAttribute("src", computerChoice);
        
        
       //logic part
        if (playerChoice === computerChoice) {
            console.log("It's a tie!");
            var getResult = document.getElementById("result");
            getResult.innerText="Tie!"
            getResult.style.color="Red";
            getResult.style.transition="0.6s linear infinite";
        } else if (
            (playerChoice === playerImages[0] && computerChoice === computerImages[1]) ||
            (playerChoice === playerImages[1] && computerChoice === computerImages[2]) ||
            (playerChoice === playerImages[2] && computerChoice === computerImages[0])
        ) {
            console.log("Computer gets a point!");
                   //computerScore++;
            // console.log(computerScore)
            var getResult = document.getElementById("result");
            getResult.innerText="Oops! You lost the match";
            getResult.style.color="green";

        } 
        else {
            // console.log("Player gets a point!");
            // playerScore++;
            //  console.log(playerScore)
            var getResult = document.getElementById("result");
            getResult.innerText="Player Wins";
            getResult.style.color="orange";
            
        }
        
      //for next round reset the playerChoice
        playerChoice = null;
        
    }
    
}
var getReset = document.getElementById("reset");
var getResult = document.getElementById("result");
getReset.addEventListener("click", function ()
{
    getResult.innerText="Choose an option"
})



