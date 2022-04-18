let rockPlayer = document.getElementById("rock")
let paperPlayer = document.getElementById("paper")
let scissorPlayer = document.getElementById("scissor")

// status
let vs = document.getElementById("status")
let draw = document.getElementById("result-draw")
let player_Win = document.getElementById("result-playerWin")
let com_Win = document.getElementById("result-comWin")
let refreshGame = document.getElementById("restart")

let styleHand = document.getElementById("hand")

let rockComputer = document.getElementById("rockCom")
let paperComputer = document.getElementById("paperCom")
let scissorComputer = document.getElementById("scissorCom")

let computerHands = [
    "rockCom",
    "paperCom",
    "scissorCom"
];
function randomComputerHand() {
    const randomNumber = Math.floor(Math.random() * 3);
    return computerHands[randomNumber];
}

function gamestatus() {
    setTimeout(function(){
        vs.classList.remove("description")   
        if (result === "win") {
            vs.innerHTML = "<div >player 1 </br> win</div>"
            vs.classList.add("statusResult")
        } else if (result === "draw") {
            vs.innerHTML = "<div>Draw</div>"
            vs.classList.add("result-draw")
        } else {
            vs.innerHTML = "<div>Com </br>win</div"
            vs.classList.add("statusResult")
        }
    } )
}

rockPlayer.addEventListener("click", function(){
    let resultGame = randomComputerHand()
    console.log(resultGame);
    rockPlayer.classList.add("hands")
    gamestatus()

    // conditional
    if (resultGame === "scissorComp") {
        result = "win"
        console.log("menang nihh bruh");
    } else if (resultGame === "rockCom") {
        result = "draw"
        console.log("draw nihh bruh");
    }else {
        result = "lose"
        console.log("lose nihh bruh");
    }

})

scissorPlayer.addEventListener("click", function(){
    let resultGame = randomComputerHand()
    console.log(resultGame);
    scissorPlayer.classList.add("hands")
    gamestatus()

        // conditional
        if (resultGame === "paperCom") {
            result = "win"
            console.log("menang nihh bruh");
        } else if (resultGame === "scissorCom") {
            result = "draw"
            console.log("draw nihh bruh");
        }else {
            result = "lose"
            console.log("lose nihh bruh");
        }

})

paperPlayer.addEventListener("click", function(){
    let resultGame = randomComputerHand()
    console.log(resultGame);
    paperPlayer.classList.add("hands")
    gamestatus()

        // conditional
        if (resultGame === "rockCom") {
            result = "win"
            console.log("menang nihh bruh");
        } else if (resultGame === "paperCom") {
            result = "draw"
            console.log("draw nihh bruh");
        }else {
            result = "lose"
            console.log("lose nihh bruh");
        }
})

refreshGame.addEventListener("click", function(){
    alert("Welcome back to Rock Paper Scissor Game")
    window.location.reload()
    console.log("muat ulang");
})
