let hour = 0;
let min  = 0;
let sec  = 0;
let mil  = 0;

let timer    = document.querySelector("#timer-number");
let interval = 0;

const playBtn  = document.querySelector("#btn-play");
const stopBtn  = document.querySelector("#btn-stop");
const pauseBtn = document.querySelector("#btn-pause");
const lapBtn   = document.querySelector("#btn-lap");
const clearBtn = document.querySelector("#btn-clear-lap");

const lapDiv   = document.querySelector("#lap-time");

playBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
pauseBtn.addEventListener("click", pauseTimer);
lapBtn.addEventListener("click", lapTimer);
clearBtn.addEventListener("click", clearLap);

function btnToggle(btn){
    btn.classList.toggle("hidden");
}

function startTimer(){
    if(interval === 0)
        interval = setInterval(handleTimer, 100);
    
    btnToggle(playBtn);
    btnToggle(pauseBtn);
}

function handleTimer(){
    
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
    timer.innerHTML = showTimer();
}

function showTimer(){
     return `${hour>9?hour:"0"+hour}:${min>9?min:"0"+min}:${sec>9?sec:"0"+sec}.${mil}`;
}

function pauseTimer(){
    clearInterval(interval);
    btnToggle(playBtn);
    btnToggle(pauseBtn);
    interval = 0;
}

function stopTimer(){
    clearInterval(interval);
    hour = 0;
    min = 0;
    sec = 0;
    mil = 0;

    interval = 0;

    timer.innerHTML = "00:00:00.0";

    if(!pauseBtn.classList.contains("hidden")){
        playBtn.classList.remove("hidden");
        pauseBtn.classList.add("hidden");
    }
 
}

function lapTimer(){
    const lap = document.createElement("li");
    lap.textContent = showTimer();
    if(lapDiv.hasChildNodes)
        lapDiv.insertBefore(lap, lapDiv.firstChild);
    else
        lapDiv.appendChild(document.createElement("li"));

    if(lapDiv.hasChildNodes && clearBtn.classList.contains("hidden"))
        btnToggle(clearBtn);
}

function clearLap(){
    lapDiv.innerHTML = "";
    btnToggle(clearBtn);
}