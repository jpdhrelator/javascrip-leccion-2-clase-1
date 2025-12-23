let jug1='tijera';
let jug2='piedra';



if(jug1 == jug2){
   console.log('Empate');
} else if(      
      (jug1=='papel' && jug2=='piedra')||
      (jug1=='piedra' && jug2=='tijera')||
      (jug1=='tijera' && jug2=='papel')
){
   console.log('Gana Jugador 1');
} else {
   console.log('Gana Jugador 2');
}