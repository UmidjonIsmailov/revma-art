let time = 3600; //bu yerda voqt belgilanadi
const countdownEl = document.getElementById("countdown")
setInterval(updateCountdown, 1000);
//Bu yerda to'liq funksiya
function updateCountdown(){
    const minutes = Math.floor(time / 60)
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds: seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}