
function relogio(){

function getTimeSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'})
}

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0;
let timer;

function iniciaRelogio() {
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeSeconds(segundos);
    }, 1000)
}

document.addEventListener('click', function(event) {
    const elemento = event.target;
    if (elemento.classList.contains('zerar')){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0
    }
    if (elemento.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio();
    }
    if (elemento.classList.contains('pausar')){
        clearInterval(timer);
        relogio.classList.add('pausado')
    }
})
} relogio();