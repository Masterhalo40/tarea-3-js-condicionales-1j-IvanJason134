var btnHoras = document.querySelector('#greetings');
btnHoras.addEventListener('click', saludar);

var saludo = document.querySelector('#saludo');

function saludar(){
    var h = document.querySelector('#horas');
    var horas = Number(h.value);

    if (horas >= 1 && horas <= 12){
        saludo.textContent = "Buenos dias!!";
    }else if (horas >=13 && horas <=19){
        saludo.textContent = "Buenas tardes!!";
    }else if (horas >= 20 && horas <= 24){
        saludo.textContent = "Buenas noches!!!";
    }else{
        saludo.textContent = "Hora no valida";
    }
}