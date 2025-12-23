

let num1=3;
let num2=4;

// &&

let evaluacion = num1 == 4 && num2 == 4


if(num1 == 4 ){
   // console.log('Num1 es 4');
}else if(num1==3){
  //  console.log('Num1 es 3');   
}else{
  //  console.log('Num1 es diferente');
}
console.log("----------------");


if(num1 == 4 ){
   // console.log('Num1 es 4');
} else{
   // console.log('Num1 es diferente');
}

if (num1==3){
  //  console.log('Num1 es 3');   
}

num1=3;
num2=4;

if( num1 == 3 && num2 == 4 ){
  //  console.log('se cumple la validacion && 1');
}
if( num1 != 4 && num2 != 3 ){
//   console.log('se cumple la validacion  &&2');
}
if( num1 > 2 && num2 == 3 ){
 //   console.log('se cumple la validacion && 3');
}

if( (num1 == 3 && num2 == 4) && ( num1 > 2 && num2 > 3 ) ){
 //   console.log('se cumple la validacion && full');
}
// ||

let text1='hola';
let text2='chao';

if(text1=='hola' || text2=='chao'){
   //  console.log('se cumple la validacion or 1');
}
if(text1 =='holaaaaa' || text2=='chao'){
  //   console.log('se cumple la validacion or 2');
}
if(text1 =='holaaaaa' || text2=='chaoooo'){
   //  console.log('se cumple la validacion or 3');
}

if((text1 =='holaaaaa' || text2=='chao') || (text1 =='hola' || text2=='chao')){
   //  console.log('se cumple la validacion or full');
}
if(text1 =='holaaaaa' || text2=='chao' || text1 =='hola' || text2=='chao'){
   //  console.log('se cumple la validacion or full 2 ');
}

// !
let text3='dia';
let text4='noche';


let evaluacionTexto = 'dia' == text4;

console.log("'dia' == text4 -->",evaluacionTexto);

if( evaluacionTexto ){
    console.log('entro aqui si el restado de la evaluacion es true');
}

if( ! evaluacionTexto ){
   console.log('entro aqui si el restado de la evaluacion es false');
}