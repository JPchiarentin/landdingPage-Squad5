const titulo1 = document.querySelector(".subtext1");
const titulo2 = document.querySelector(".subtext2");

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 100 * i)
    });
        
    
}

typeWrite(titulo1);
typeWrite(titulo2);
