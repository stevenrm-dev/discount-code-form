function codeToClipBoard(btn) {
    btn.addEventListener('click', ()=> {
        const couponCode = document.getElementById('i-promo');
        navigator.clipboard.writeText(couponCode.value);
    });
}