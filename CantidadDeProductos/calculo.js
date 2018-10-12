var btnCalcular = document.querySelector('#calcular');
btnCalcular.addEventListener('click', calculo);

var total = document.querySelector('#total');

function calculo(){
    var cantidad = document.querySelector('#cantidad');
    var cant = Number(cantidad.value);
    var precio = document.querySelector('#precio');
    var prec = Number(precio.value);

    var resultado = cant * prec;

    if (cant < 10){
        total.textContent = "Costo total de la venta: $" + (resultado - (resultado * .05));
    }else if (cant >= 10 && cant <= 20){
        total.textContent = "Costo total de la venta: $" + (resultado - (resultado * .10));
    }else if (cant > 20){
        total.textContent = "Costo total de la venta: $" + (resultado - (resultado * .15));
    }
}