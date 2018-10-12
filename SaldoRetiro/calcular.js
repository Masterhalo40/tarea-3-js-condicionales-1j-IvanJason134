var btnCalcular = document.querySelector('#btnCalcular');
btnCalcular.addEventListener('click', calcular);

function calcular(){
    var Nsaldo = document.querySelector('#saldo');
    var Nretiro = document.querySelector('#retiro');
    var saldo = Number(Nsaldo.value);
    var retiro = Number(Nretiro.value);
    var pResultado = document.querySelector('#result');

    if (retiro <= saldo){
        var resultado = saldo - retiro;
        pResultado.textContent = "Retiro exitoso!, su nuevo saldo es: " + resultado;
    }else{
        pResultado.textContent = "Saldo insuficiente"
    }

}