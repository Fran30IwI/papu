function accion(){
    console.log("esta papurri");
    var accion = document.getElementsByClassName("nav-enlace");
    for(var i = 0; i < accion.length; i++){
        accion[i].classList.toggle("desaparece")
    }
}

