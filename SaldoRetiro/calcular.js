var btnCalcular = document.querySelector('#btnCalcular');
btnCalcular.addEventListener('click', calcular);

function calcular(){
    var Nsaldo = document.querySelector('#saldo');
    var Nretiro = document.querySelector('#retiro');
    var saldo = Number(Nsaldo.value);
    var retiro = Number(Nretiro.value);
    var pResultado = document.querySelector('#result');

    if (retiro <= saldo){
        window.alert('Retiro exitoso!!');
        var resultado = saldo - retiro;
        pResultado.textContent = "Tu nuevo saldo es: " + resultado;
    }else{
        window.alert('Saldo insuficiente!!');
    }

}