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
        alert("Время закончилось");
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
        const audio = new Audio({
        urls: ['sound.mp3', 'sound.ogg', 'sound.wav'],
        autoplay: true,
    })}

