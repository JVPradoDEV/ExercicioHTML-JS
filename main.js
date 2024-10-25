const form = document.getElementById("form-numeros");
let numeroA = document.getElementById("numero-a");
let numeroB = document.getElementById("numero-b");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let mensagemSucesso = document.querySelector(".valid-message");
    let mensagemFracasso = document.querySelector(".invalid-message");

    if (numeroB.value > numeroA.value){
        console.log("ta valido parceiro");
        mensagemFracasso.style.display = "none";
        mensagemSucesso.style.display = "block";

        numeroA.value = "";
        numeroB.value = "";

    } else {
        mensagemSucesso.style.display = "none";
        mensagemFracasso.style.display = "block";
        console.log("ta nada");

        numeroA.value = "";
        numeroB.value = "";
    }


})



