function startTimer(duration, display) {
    var timer = duration;
    var minutes;
    var seconds;

    var interval = setInterval(()=> {
       
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes; 
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if(minutes != "00" || seconds != "00"){
            display.textContent = minutes + ":" + seconds;
        }

        if(timer > 0){
            --timer;
        }

        if(minutes == "00" && seconds == "00"){
            let timer = document.querySelector('.time');

            timer.parentElement.classList.add("timeout");
            timer.classList.remove("tx--promo");

            timer.innerHTML = `Código caducado. <a href="#" class="tx--code tx__color--light link link__refresh">Reiniciar</a>.`;

            document.getElementsByClassName("btn--copy")[0].disabled = true;

            document.getElementsByClassName("link__refresh")[0].addEventListener("click", ()=> {
                location.reload();
            });

            stopInterval(interval);
        }

    }, 1000);


}

function stopInterval(myInterval) {
    clearInterval(myInterval);
}