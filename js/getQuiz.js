// Array para almacenar los datos de todos los objetos
let questions = [];
// Índice del objeto actual
let currentQuestionIndex = 0;

const promiseUrl = './js/json/getContent.json';

const getQuiz = ()=> {
    fetch(promiseUrl)
    .then(response=> response.json())
    .then(data=> {
        //Almacenar datos en la array
        questions = data;
        //Imprimir el primer objeto
        updateForm(questions[currentQuestionIndex]);
    });
}

getQuiz();
