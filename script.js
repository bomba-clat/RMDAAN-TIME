// Update this date to the first day of Ramadan for the current year
const ramadanStartDate = new Date('2025-02-28T00:00:00'); // Example date, adjust as needed

// Elements to update
const daysCount = document.querySelector('[data-days]');
const hoursCount = document.querySelector('[data-hours]');
const minutesCount = document.querySelector('[data-minutes]');
const secondsCount = document.querySelector('[data-seconds]');

function countdown() {
    const currDate = new Date();
    const remDate = new Date(ramadanStartDate);

    const totalSeconds = (remDate - currDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysCount.innerHTML = formatTime(days);
    hoursCount.innerHTML = formatTime(hours);
    minutesCount.innerHTML = formatTime(minutes);
    secondsCount.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial call to display the countdown immediately
countdown();

// Update the countdown every second
setInterval(countdown, 1000);
