let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
const msgP=document.querySelector("#msg");
const user=document.querySelector("#scr");
const scoreComp=document.querySelector("#comp");
const Comp=()=>{
    let compChoice=["rock","scissors","paper"];
    let options=Math.floor(Math.random()*3);
    return compChoice[options];
}
const draw=()=>{
    msgP.innerText="It is a draw!"
    msgP.style.backgroundColor="blue";
}
const gameWinner=(check)=>{
    if(check=== true){
        msgP.innerText="Congrats!You won";
        userScore++;
        user.innerText=userScore;
        msgP.style.backgroundColor="green";
    }else{
        msgP.innerText="You Lost!";
        compScore++;
        scoreComp.innerText=compScore;
        msgP.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user=",userChoice);
    let compTurn=Comp();
    console.log("comp=",compTurn);
    if(userChoice===compTurn){
        draw();}
        else {
            let winner=true;
           if(userChoice==="rock"){
            //scissors,paper
             winner= compTurn==="paper"?false:true;
            gameWinner(winner);
           }else if(userChoice==="scissors"){
            //rock paper
             winner= compTurn==="rock"?false:true;
             gameWinner(winner);
           }else{
            //rock scissors
            winner= compTurn==="scissors"?false:true;
            gameWinner(winner);
           }
        }
    }


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("Id");
        playGame(userChoice);
    });
    
});