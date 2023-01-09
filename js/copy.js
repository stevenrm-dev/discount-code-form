function codeToClipBoard() {
    var txCode= document.getElementsByClassName("tx--promo")[0].value;

    navigator.clipboard.writeText(txCode);
}

function copyValidated(){

    var timer = 15;

    var interval = setInterval(()=> {
        
        var check = document.getElementsByClassName("icon--check")[0];
        var btnCopy = document.getElementsByClassName("btn--copy")[0];

        if (timer > 0 && check.classList.contains("d--none") && !btnCopy.classList.contains("d--done")) {
            btnCopy.classList.add("d--none");
            check.classList.remove("d--none");
        }

        if (timer <= 0) {
            check.classList.add("d--none");
            btnCopy.classList.remove("d--none");
            stopInterval(interval);
        }
        --timer;
    }, 100);

}