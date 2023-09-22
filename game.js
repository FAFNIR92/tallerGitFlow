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

            case "1": {

                alert(`Jugador 1 ha sacado ${turnPlayerOne}`);
                alert(`Jugador 2 ha sacado ${turnPlayerTwo}`);
    
                counterPlayerOne+=turnPlayerOne
                counterPlayerTwo+=turnPlayerTwo
                counterRound++
                alert(`El acumulado del jugador 1 es: ${counterPlayerOne}`)  ;
                alert(`El acumulado del jugador 2 es: ${counterPlayerTwo}`)  ;
    
                alert(`Ronda ${counterRound} finalizada`);
    
                if(counterPlayerOne>21 && counterPlayerTwo>21){
    
                    alert(`Ambos han perdido, han sobrepasado el puntaje de 21`)
    
                } else if(counterPlayerOne>21 && counterPlayerTwo <=21){
    
                    alert(`El jugador 2 ha ganado, ya que el jugador 1 superó el puntaje de 21`)
    
                } else if(counterPlayerOne<=21 && counterPlayerTwo >21){
    
                    alert(`El jugador 1 ha ganado, ya que el jugador 2 superó el puntaje de 21`)
    
                } else if(counterPlayerOne>counterPlayerTwo){
    
                    alert(`El jugador 1 ha ganado`)
    
                } else if(counterPlayerOne<counterPlayerTwo){
    
                    alert(`El jugador 2 ha ganado`)
    
                } else if(counterPlayerOne===counterPlayerTwo){
    
                    alert(`HAY UN EMPATE`)
    
                } 
    
                 break
                 
            }
            case "2": {
                    
                alert(`Jugador 1 ha sacado ${turnPlayerOne}`);
                alert(`Jugador 2 se ha plantado`);
    
                counterPlayerOne+=turnPlayerOne
                counterRound++
    
                alert(`El acumulado del jugador 1 es: ${counterPlayerOne}`)  ;
                alert(`El acumulado del jugador 2 es: ${counterPlayerTwo}`)  ;
    
                alert(`Ronda ${counterRound} finalizada`) 
    
                if(counterPlayerOne>21){
    
                    alert(`El jugador 2 ha ganado, ya que el jugador 1 sobrepaso el puntaje de 21`)
    
                }else if(counterPlayerOne>counterPlayerTwo){
    
                    alert(`El jugador 1 ha ganado`)
    
                }else if(counterPlayerOne<counterPlayerTwo){
    
                    alert(`El jugador 2 ha ganado`)
    
                }else if(counterPlayerOne===counterPlayerTwo){
    
                    alert(`HAY UN EMPATE`)
                } 
    
                break}
            
    
        }  break
    }           case "2": {
    
        switch (opcionTurnoPlayerTwo){
    
               
            case "1": {
    
                alert(`Jugador 1 se ha plantado`);
                alert(`Jugador 2 ha sacado ${turnPlayerTwo}`);
    
                counterPlayerTwo+=turnPlayerTwo
                counterRound++
                alert(`El acumulado del jugador 1 es: ${counterPlayerOne}`)  ;
                alert(`El acumulado del jugador 2 es: ${counterPlayerTwo}`)  ;
    
                alert(`Ronda ${counterRound} finalizada`)
    
                if(counterPlayerTwo>21){
    
                    alert(`El jugador 1 ha ganado, ya que el jugador 2 sobrepaso el puntaje de 21`)
    
                }else if(counterPlayerOne>counterPlayerTwo){
    
                    alert(`El jugador 1 ha ganado`)
    
                }else if(counterPlayerOne<counterPlayerTwo){
    
                    alert(`El jugador 2 ha ganado`)
    
                }else if(counterPlayerOne===counterPlayerTwo){
    
                    alert(`HAY UN EMPATE`)
                } 