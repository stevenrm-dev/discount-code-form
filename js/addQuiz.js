const stepsIndex = document.getElementsByClassName('tag-steps')[0];
const title = document.getElementsByClassName('title--primary')[0];
const description = document.getElementsByClassName('tx__description')[0];

const form = document.getElementsByClassName('quiz__wrapper')[0];
const btnNext = document.getElementsByClassName('quiz__btn')[0];
btnNext.disabled = true;

let couponGenerator = '';

function updateForm(content) {
    //Limpiar el contenido dentro del formulario
    form.innerHTML = '';

    //Agregar la pregunta actual
    form.innerHTML += `<p class="quiz__tx tx--sans tx--uppercase tx__color--bright">${content.question}</p>`;

    //Agrega las respuestas
    content.answers.forEach((answer, index)=> {
        const answerId = index + 1;

        form.innerHTML += `
            <label class="radio-wrapper tx--alt tx--code tx__color--light h--100" for="answer__${answerId}" id="label__${answerId}">
                <input type="radio" class="input--radio" id="answer__${answerId}" name="step-1">
                <span class="dot"></span>
                ${answer}
            </label>
        `;
    });

    if(currentQuestionIndex === questions.length - 1) {
        const inputs = document.querySelectorAll('.input--radio');

        inputs.forEach((input) => {
            input.setAttribute('name', 'step-2');
        });
    }
}

function couponPageContent() {
    stepsIndex.textContent = 'Tu premio está listo';
    title.textContent = '¡Enhorabuena!';
    btnNext.remove();

    form.innerHTML = `
        <p class="quiz__tx tx--sans tx--uppercase tx__color--bright">Lo prometido es deuda</p>
        <form class="promo__wrapper">
            <label class="coupon-wrapper" for="i-promo">
                <input type="text" class="tx--code tx--promo tx--uppercase promo__code" value="${coupon}" id="i-promo" disabled>
                <button class="btn--copy tx--code tx--copy tx__color--dark" type="button">Copiar</button>
            </label>
        </form>
        <p class="tx__info tx--code tx__color--light space__block--10">Introduce este código en tu próxima compra para conseguir tu premio. ¡Disponible durante 20 minutos!</p>
        <div class="checkbox__wrapper countdown__wrapper">
            <span class="icon--timer material-symbols-outlined tx__color--light">timer</span>
            <p class="time tx--code tx--promo tx__color--light">20:00</p>
        </div>
        <a class="btn quiz__btn link tx--alt tx--sans tx__color--light w--100" href="https://github.com/stevenrm-dev/discount-code-form/">Volver al Repo</a>
    `;
    
    const btnCopy = document.getElementsByClassName('btn--copy')[0];
    const timerContainer = document.getElementsByClassName('time')[0];

    codeToClipBoard(btnCopy);
    //Inicializa la función de timer.js, además añade los parámetros de 1200 segundos = 20 minutos
    startTimer(1200, timerContainer, btnCopy);
}

btnNext.addEventListener('click', ()=> {
    currentQuestionIndex++;

    if(currentQuestionIndex >= questions.length) {
        couponPageContent();
    } else {
        stepsIndex.textContent = 'Paso 2 de 2';
        title.textContent = 'La última, ¡Ya casi lo tienes!';
        description.remove();
        updateForm(questions[currentQuestionIndex]);
    }
});