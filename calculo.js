const BOTONRESUMEN = document.getElementById("resumen");

function calcular() {
    
    let cantidad = document.getElementById("cant").value;
    let mensaje;
    if (isNaN(cantidad) || cantidad === "") {
        mensaje = alert("La casilla cantidad SOLO admite numeros!");
        } else {
            const CANTIDAD = parseInt(document.getElementById("cant").value);
            const CUENTA = CANTIDAD*200;
            switch (document.getElementById("categorias").value) {
                case 'Estudiante':
                    document.getElementById("aPagar").value=`$ ${CUENTA*0.2}`;
                    break;
                case 'Trainee':
                    document.getElementById("aPagar").value=`$ ${CUENTA*0.5}`;
                    break;
                case 'Junior':
                    document.getElementById("aPagar").value=`$ ${CUENTA*0.85}`;
                    break;
            }
        }
}

BOTONRESUMEN.onclick=calcular;


