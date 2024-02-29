document.addEventListener("DOMContentLoaded", () => {

    const btns = document.querySelectorAll(".section .d-flex");
    btns.forEach(function(btn){
        btn.addEventListener("click", function(){
            document.querySelector('.section.active').classList.remove('active');
            btn.parentElement.classList.toggle("active");
        })
    })

});