let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let isRunning = false;

const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');
const lapButton = document.getElementById('lap-btn');
const lapsList = document.getElementById('laps');

function startStopwatch() {
    if (!isRunning) {
        interval = setInterval(runStopwatch, 10);
        isRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(interval);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(interval);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    document.getElementById('milliseconds').innerText = '00';
    lapsList.innerHTML = '';
}

function lapStopwatch() {
    const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatMilliseconds(milliseconds)}`;
    const lapItem = document.createElement('li');
    lapItem.innerText = lapTime;
    lapsList.appendChild(lapItem);
}

function runStopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById('minutes').innerText = formatTime(minutes);
    document.getElementById('seconds').innerText = formatTime(seconds);
    document.getElementById('milliseconds').innerText = formatMilliseconds(milliseconds);
}

function formatTime(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

function formatMilliseconds(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

startButton.addEventListener('click', startStopwatch);
pauseButton.addEventListener('click', pauseStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', lapStopwatch);
