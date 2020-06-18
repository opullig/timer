let hour = 0;
let min = 0;
let sec = 0;
let mil = 0;

let timer = document.querySelector("#timer-number");
let interval = 0;

const playBtn = document.querySelector("#btn-play");
const stopBtn = document.querySelector("#btn-stop");
const pauseBtn = document.querySelector("#btn-pause");

playBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
pauseBtn.addEventListener("click", pauseTimer);

function btnToggle(){
    pauseBtn.classList.toggle("hidden");
    playBtn.classList.toggle("hidden");
}

function startTimer(){
    if(interval === 0)
        interval = setInterval(handleTimer, 100);
    
    btnToggle();

}

function handleTimer(){
    timer.innerHTML = `${hour}:${min}:${sec}.${mil}`;
    mil++;

    if(mil > 9){
        mil = 0;
        sec++;

        if(sec > 59){
            sec = 0;
            min++;

            if(min > 59){
                min = 0;
                hour++;
            }
        }

    }
}

function pauseTimer(){
    clearInterval(interval);
    btnToggle();
    interval = 0;
}

function stopTimer(){
    clearInterval(interval);
    hour = 0;
    min = 0;
    sec = 0;
    mil = 0;

    interval = 0;

    timer.innerHTML = "0:0:0.0";

    if(!pauseBtn.classList.contains("hidden")){
        playBtn.classList.remove("hidden");
        pauseBtn.classList.add("hidden");
    }
 
}