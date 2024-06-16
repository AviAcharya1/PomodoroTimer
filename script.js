
let workDurationInput = document.getElementById('work-duration');
let breakDurationInput = document.getElementById('break-duration');
let startButton = document.getElementById('start-button');
let pauseButton = document.getElementById('pause-button');
let resetButton = document.getElementById('reset-button');
let timeDisplay = document.getElementById('time');
let statusDisplay = document.getElementById('status');

let workDuration = parseInt(workDurationInput.value) * 60;
let breakDuration = parseInt(breakDurationInput.value) * 60;
let currentTime = workDuration;
let timerInterval;
let isWorkTime = true;

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    startButton.disabled = true;
}

function pauseTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    currentTime = isWorkTime ? workDuration : breakDuration;
    updateDisplay();
}

function updateTimer() {
    if (currentTime <= 0) {
        isWorkTime = !isWorkTime;
        currentTime = isWorkTime ? workDuration : breakDuration;
        statusDisplay.textContent = isWorkTime ? 'Work Time' : 'Break Time';
    } else {
        currentTime--;
    }
    updateDisplay();
}

function updateDisplay() {
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}
