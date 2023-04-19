var data = new Date();
var hora = data.getHours();

function load() {
    relogio();
    calen();
}

function diaSemana() {
    var relogio = document.getElementById('calen');
    var data = new Date();
    var diaSemana = data.getDay();
    switch (diaSemana) {
        case 0:
            relogio.innerHTML = 'Domingo';
            break;
        case 1:
            relogio.innerHTML = 'Segunda-Feira';
            break;
        case 2:
            relogio.innerHTML = 'Terça-Feira';
            break;
        case 3:
            relogio.innerHTML = 'Quarta-Feira';
            break;
        case 4:
            relogio.innerHTML = 'Quinta-Feira';
            break;
        case 5:
            relogio.innerHTML = 'Sexta-Feira';
            break;
        case 6:
            relogio.innerHTML = 'Sábado';
            break;
    }
}

function relogio() {
    var data = new Date();
    var horas = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    var relogio = document.querySelector('#relogio');
    if (horas < 10) {
        relogio.innerHTML = '0' + horas + ':' + minutos + ':' + segundos;
    } else if (minutos < 10) {
        relogio.innerHTML = horas + ':' + '0' + minutos + ':' + segundos;
    } else if (segundos < 10) {
        relogio.innerHTML = horas + ':' + minutos + ':' + '0' + segundos;
    } else {
        relogio.innerHTML = horas + ':' + minutos + ':' + segundos;
    }
}
window.setInterval('relogio()', 1000);

function calen() {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    var calen = document.getElementById("calen");
    if (dia < 10) {
        calen.innerHTML = '0' + dia + '/' + '0' + (mes + 1) + '/' + ano , 1000;
    } else {
        calen.innerHTML = dia + '/' + '0' + (mes + 1) + '/' + ano , 1000;
    }
}

function fecharon() {
    document.getElementById("fechar").style.opacity = "1";
}
function fecharleave() {
    document.getElementById("fechar").style.opacity = "0";
}
let open = false;
if (!open) {
    document.querySelector('#menu').style.marginLeft = -300;
}
document.querySelector('#iniciar').addEventListener('click', e => {
    open = !open;
    fecharMenu();
})
function fecharMenu() {
    if (open) {
        document.querySelector('#menu').style.marginLeft = 0;
        return;
    }
    document.querySelector('#menu').style.marginLeft = -300;
}