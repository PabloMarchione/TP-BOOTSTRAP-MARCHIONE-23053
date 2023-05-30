const BOTONRESUMEN = document.getElementById("resumen");



function calcular() {
    
    let cantidad = document.getElementById("cant").value;
    let categoria = document.getElementById("categ").value;
    let mensaje;
    if (isNaN(cantidad) || isNaN(categoria) || cantidad === "" || categoria === "") {
        mensaje = alert("Por favor ingrese SOLO numeros");
        } else {
            document.getElementById("aPagar").value = parseInt(cantidad) + parseInt(categoria);
        }
}

BOTONRESUMEN.onclick=calcular;


