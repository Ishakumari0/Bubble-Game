var timer = 6;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn
}
function makeBubbles() {
    var clutter = ""

for (var i = 1; i <= 126; i++) {
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble"><h2>${rn}</h2></div>`;
}

document.querySelector("#pannel-bottom").innerHTML = clutter
    
}

function runtimer(){
    var timerEnd = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timer-value").textContent = timer;
        }else{
            clearInterval(timerEnd);
            document.querySelector("#pannel-bottom").innerHTML = ` <div id="Gameover">
            <h1>Game Over</h1>
            \n<p>Your Final Scrore : ${score}</p>
        </div>` ;
        }
    },1000);
}

document.querySelector("#pannel-bottom")
.addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        makeBubbles();
        getNewHit();
        document.getElementById("#pannel-bottom").style.flexDirection = 'coloumn';
    }else{
        makeBubbles();
        getNewHit();
    }
})

runtimer();
getNewHit();
makeBubbles();