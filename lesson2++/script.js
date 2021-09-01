const timerInput = document.getElementById("time");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const timerShow = document.getElementById("timer");


buttonStart.addEventListener('click', function() {
    timeMinut = parseInt(timerInput.value) * 60
})

timer = setInterval(function () {
    seconds = timeMinut%60
    minutes = timeMinut/60%60
    hour = timeMinut/60/60%60
    if (timeMinut <= 0) {
        clearInterval(timer);
        soundClick();
    } else {
        const strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timeMinut;
}, 1000);

buttonStop.addEventListener('click', function () {
	clearInterval(timer)});

    function soundClick () {
        const audio = new Audio();
        audio.src= './Martin_Jacoby_Yiruma_-_River_Flows_in_You_48080718.mp3';
        audio.autoplay = true;
    }

