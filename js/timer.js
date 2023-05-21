const timerContainer = document.getElementsByClassName('time')[0];
//mover btnCopy a copy.js
const btnCopy = document.getElementsByClassName('btn--copy')[0];

function startTimer(duration, display) {
    let timer = duration;
    let interval = setInterval(()=> {
        //Establecer formato y haciendo los cálculos sin posibilidad de resultados decimales
        const minutes = String(Marth.floor(timer / 60)).padStart(2, '0');
        const seconds = String(timer % 60).padStart(2,'0');

        //Formato del contador
        display.textContent = minutes + ':' + seconds;

        if(timer > 0) {
            timer--;
        } else {
            handleTimeout();
            clearInterval(interval);
        }
    }, 1000);

    //Función al finalizar la cuenta atrás
    function handleTimeout() {
        timerContainer.parentElement.classList.add('timeout');
        timerContainer.classList.remove('tx--promo');

        timerContainer.innerHTML = `Código caducado. <a href="#" class="tx--code tx__color--light link link__refresh">Reiniciar</a>.`;
        
        btnCopy.disabled = true;
    }
}

/* 
Siguiente paso:
- Hay que integrar el código al HTML.
*/