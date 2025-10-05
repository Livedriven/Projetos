const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function tempo(){
    let dataToday = new Date()
    let hr = dataToday.getHours();
    let min = dataToday.getMinutes();
    let seg = dataToday.getSeconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

    if(hr < 10){
        horas.textContent = '0' + hr;
    }
    if(min < 10){
        minutos.textContent = '0' + min;
    }
    if(seg < 10){
        segundos.textContent = '0' + seg;
    }

})

relogio();