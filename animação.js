const titulo = document.querySelector("h2");

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 75 * i)
    });
        
    
}

typeWrite(titulo);