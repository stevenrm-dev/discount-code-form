var saveAnswer1;
var saveAnswer2;

var tagText = document.getElementsByClassName("tag__tx")[0];
var titleText = document.getElementsByClassName("tx__title")[0];
var headerText = document.getElementsByClassName("tx--code")[0];

function quizLogic(step){
    var saveAnswer;
    var answersGroup = document.getElementsByName(step);

    for (let index = 0; index < answersGroup.length; index++) {
        
        if(answersGroup[index].checked){
            saveAnswer = answersGroup[index].value;
        }
        
    }

    if(step == "step1") {
        saveAnswer1 = parseInt(saveAnswer.slice(-1), 10) + 1;

        tagText.innerHTML = "Paso 2 de 2";
        titleText.innerHTML = "Vamos, una más";

        headerText.classList.add("d--none");
        document.getElementsByClassName("quiz__step1")[0].classList.add("d--none");
        document.getElementsByClassName("quiz__step2")[0].classList.remove("d--none");
    }

    if(step == "step2") {
        saveAnswer2 = saveAnswer.slice(-4);

        tagText.innerHTML = "Tu premio está listo";
        titleText.innerHTML = "¡Enhorabuena!";
        document.getElementsByClassName("tx--promo")[0].value = saveAnswer1 + saveAnswer2;

        document.getElementsByClassName("quiz__step2")[0].classList.add("d--none");
        document.getElementsByClassName("quiz__promo")[0].classList.remove("d--none");
    }
}

