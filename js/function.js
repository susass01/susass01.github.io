
document.getElementById('boton').addEventListener('click', function(){
    console.log("Hola mundo desde Eventlistener");
    this.innerHTML = Date();
});

const articulo = document.querySelector("#contenido");

function mostrarMas(){
    if (articulo.className == "abierto"){
        //leer menos
        articulo.className = "";
        button.textContent = "Mostrar Más"
    } else {
        //leer mas
        articulo.className = "abierto";
        button.textContent = "Mostrar Menos"
    }
}
