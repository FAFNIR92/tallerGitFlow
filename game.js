const miBoton = document.getElementById('miBoton');
miBoton.addEventListener('click', function() {

let counterPlayerOne=0;
let counterPlayerTwo=0;
let counterRound=0

while(counterRound<2){
    const turnPlayerOne = Math.floor(Math.random() * 10) + 1;
    const turnPlayerTwo = Math.floor(Math.random() * 10) + 1;

    alert(`Jugador 1 ha sacado ${turnPlayerOne}`);
    alert(`Jugador 2 ha sacado ${turnPlayerTwo}`);


    counterPlayerOne+=turnPlayerOne;
    counterPlayerTwo+=turnPlayerTwo
    counterRound++ 
    alert(`Ronda ${counterRound} finalizada`)

    if(counterRound==2){

        alert(`El acumulado de jugador 1 es ${counterPlayerOne}`)
        alert(`El acumulado de jugador 2 es ${counterPlayerTwo}`)

        let opcionTurnoPlayerOne = prompt("Jugador 1 \n 1. Seguir jugando 2. Plantarse");
        let opcionTurnoPlayerTwo = prompt("Jugador 2 \n 1. Seguir jugando 2. Plantarse");

        switch (opcionTurnoPlayerOne){


        case "1": {

        switch (opcionTurnoPlayerTwo){