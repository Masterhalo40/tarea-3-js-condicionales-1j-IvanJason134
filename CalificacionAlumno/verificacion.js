var btnVerificar = document.querySelector('#verificar');
btnVerificar.addEventListener('click', verificacion);

var resultado = document.querySelector('#resultado');

function verificacion() {
    var Pprimera = document.querySelector('#calificacion1');
    var cal1 = Number(Pprimera.value);
    var Psegunda = document.querySelector('#calificacion2');
    var cal2 = Number(Psegunda.value);
    var Ptercera = document.querySelector('#calificacion3');
    var cal3 = Number(Ptercera.value);
    
    var promedio = (cal1 + cal2 + cal3)/3;

    if (promedio >= 8){
        resultado.textContent = "Tu promedio es: " + (promedio) + " No estas en Ordinario";
    }else{
        resultado.textContent = "Tu promedio es: " + (promedio) + " Estas en Ordinario";
    }
}