let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const option = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return option[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game Was Draw. / Play Again";
    msg.style.backgroundColor ="#081b31";
};

const showwinner = (userwin) =>{
    if (userwin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "you win!";
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "you lose";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) =>{
    console.log("user choice:", userchoice);
    //Generate Computer choice 

    const compChoice = genCompChoice();
    console.log("user compchoice:", compChoice);

    if(userchoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userwin = true;
        if(userchoice === "Rock") {
            //scissor, paper
            userwin = compChoice === "Paper" ? false : true;
        }else if(userchoice === "Paper"){
            //Rock, Scissor
            userwin = compChoice === "Scissor" ? false : true;
        }else{
            //Rock, Paper
            userwin = compChoice == "Rock"? false : true;
        }
        showwinner(userwin);
    }
}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id")       
        playGame(userchoice);
    });
});