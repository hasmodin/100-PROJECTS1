
let gameSeq = [];
let userSeq = [];

let level = 0;

let btns = ["yellow", "red", "purple", "green"];
let h3 = document.querySelector('h3');

let started = false;

document.addEventListener("keypress", () => {
    if(started == false) {
        started = true;
        console.log("game started");
    }
  levelUp();
})

const gameFlash = (btn) => {
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash');
    }, 250);
}


const levelUp = () => {
    userSeq = [];
    level ++;
    h3.innerText = `level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randColor);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
    
}

const chekAns = (idx) => {
    if(gameSeq[idx] === userSeq[idx]) {
        if(gameSeq.length === userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }else {
        h3.innerHTML = `GAME IS OVER ! <b> Your Score </b> ${level} <br> Please Press any key to start.`;
        reset();
    }
}

function btnPress() {
    // console.log(this);
    let btn = this;
    gameFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor)
    console.log(userSeq);
    console.log(userColor);

    chekAns(userSeq.length-1);
    
}




let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

const reset = () => {
    userSeq =[];
    gameSeq = [];
    started = false;
    level = 0;
}