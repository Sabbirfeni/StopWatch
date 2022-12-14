let starStopBtn = document.querySelector('#startStopBtn');
let showStatus = document.querySelector('#status')
let mileSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let leadingMileSeconds = 0;
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;
let timeStatus = 'Stopped';
let timerInterval = null;

starStopBtn.addEventListener('click', startCount);

document.querySelector('#reset').addEventListener('click', reset);

function reset() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.querySelector('#time').innerText = '00:00:00:00';
    starStopBtn.innerText = 'Play';
    timeStatus = 'Stopped';
    showStatus.innerText = '';
}

function startCount() {
    if(timeStatus === 'Stopped') {
        timerInterval = window.setInterval(countTime, 100);
        timeStatus = 'Counting';
        showStatus.innerText = timeStatus;
        starStopBtn.innerText = 'Pause';
    } else {
        window.clearInterval(timerInterval);
        timeStatus = 'Stopped';
        showStatus.innerText = 'Paused';
        starStopBtn.innerText = 'Play';
    }
}

function countTime() {
    mileSeconds++;
    
    mileSeconds / 10 == 1 ? seconds++ : '';
    seconds / 60 == 1 ? minutes++ : '';
    minutes / 60 === 1 ? hours++ : '';

    mileSeconds === 10 ? mileSeconds = 0 : '';
    seconds === 60 ? seconds = 0 : '';
    minutes === 60 ? minutes = 0 : '';

    let mainMileSeconds = checkLeadingTime(leadingMileSeconds, mileSeconds)
    let mainSeconds = checkLeadingTime(leadingSeconds, seconds);
    let mainMinutes = checkLeadingTime(leadingMinutes, minutes);
    let mainHours = checkLeadingTime(leadingHours, hours);

    document.querySelector('#time').innerHTML = mainHours + ':' + mainMinutes + ':' + mainSeconds + ':' + mainMileSeconds;
}



// Leading time check to add 0 forward of the times
function checkLeadingTime(leadingTime, originalTime) {
    if(originalTime < 10) {
        leadingTime = '0' + originalTime;
        return leadingTime;
    } else {
        return originalTime;
    }
}