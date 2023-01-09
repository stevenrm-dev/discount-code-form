window.onload = function() {
    document.getElementsByClassName("quiz__btn")[0].addEventListener("click", ()=> {
        quizLogic("step1");
    });

    document.getElementsByClassName("quiz__btn")[1].addEventListener("click", ()=> {
        quizLogic("step2");

        var durationInSeconds = 60 * 20;
        display = document.querySelector('.time');
        startTimer(durationInSeconds, display);
    });
};

document.getElementsByClassName("btn--copy")[0].addEventListener("click", ()=> {
    copyValidated();
    codeToClipBoard();
});