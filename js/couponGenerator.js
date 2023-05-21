let coupon = '';

//form es una constante que se declara en el documento "addQuiz.js"
form.addEventListener('change', (event) => {
  //Label seleccionado
  const selectedLabel = event.target.closest('label');
  
  if (selectedLabel) {
    const selectedInput = selectedLabel.querySelector('input');
    //Al seleccionar una de las opciones se podrá hacer click sobre el botón siguiente.
    btnNext.disabled = !selectedInput;

    if(selectedInput.name == 'step-1') {
      //Obten únicamente los dos últimos caracteres del contenido del label seleccionado, eliminando los espacio en blanco.
      coupon = selectedLabel.textContent.trim().slice(-2);
    } else {
      //Igual que el anterior pero los cuatro últimos caracteres y haciendo que estos sean en mayúscula.
      coupon += selectedLabel.textContent.toUpperCase().trim().slice(-4);
    }
  }
});