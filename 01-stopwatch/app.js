window.onload = function(){
    //定义变量
    let seconds = 00;
    let tens = 00;
    let appendSeconds = document.getElementById("seconds");
    let appendTens = document.getElementById("tens");
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");
    let Interval;

    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer,10);
    }
    buttonStop.onclick = function(){
        clearInterval(Interval);
    }
    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendSeconds.innerHTML = seconds;
        appendTens.innerHTML = tens;
    }
    function startTimer(){
        tens++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        if(tens > 99){
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }
}