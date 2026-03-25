const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

// Date elements
const dayNameEl = document.getElementById('day-name');
const dayNumEl = document.getElementById('day-num');
const monthEl = document.getElementById('month');
const yearEl = document.getElementById('year');

function updateClock() {
    let now = new Date();
    
    // Time Logic
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ampm = 'AM';

    if (h > 12) {
    h = h - 12;
        ampm = 'PM';
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    hour.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampmEl.innerText = ampm;

    // Date Logic
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    dayNameEl.innerText = days[now.getDay()];
    dayNumEl.innerText = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
    monthEl.innerText = months[now.getMonth()];
    yearEl.innerText = now.getFullYear();

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();