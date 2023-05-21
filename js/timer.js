function startTimer(duration, display, btnCopy) {  
    let timer = duration;

    let interval = setInterval(() => {
        // Establecer formato y hacer los cálculos sin posibilidad de resultados decimales
        const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
        const seconds = String(timer % 60).padStart(2, '0');

        if(display) {
            // Formato del contador
            display.innerHTML = minutes + ':' + seconds;
        }

        if (timer > 0) {
            timer--;
        } else {
            handleTimeout(btnCopy);
            clearInterval(interval);
        }
    }, 1000);

    //Función al finalizar la cuenta atrás
    function handleTimeout() {
        if(display) {
            display.parentElement.classList.add('timeout');
            display.classList.remove('tx--promo');

            display.innerHTML = `Código caducado. <a href="#" class="tx--code tx__color--light link link__refresh">Reintentar</a>.`;
            
            const btnReload = document.getElementsByClassName('link__refresh')[0];

            btnReload.addEventListener('click', ()=> {
                location.reload();
            });
        }
        if(btnCopy) {
            btnCopy.disabled = true;
            const couponCode = document.getElementById('i-promo');
            couponCode.value = 'Código promocional perdido';
        }
    }
}