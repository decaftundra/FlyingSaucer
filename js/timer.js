let timeLeft = 30;
let timerId = setInterval(countdown, 1000);

function countdown() {
    let timeString;
    if (timeLeft == 0) {
        clearTimeout(timerId);
        $("#chronotime").text("00:00");
        gameOver = true;
    } else {


        if (timeLeft < 10) {
            timeString = "0" + timeLeft.toString();
        } else {
            timeString = timeLeft.toString();
        }

        $("#chronotime").text("00:" + timeString);
        timeLeft--;
    }
}
