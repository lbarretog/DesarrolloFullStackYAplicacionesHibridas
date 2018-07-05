/*
ES5 
definicion de una variable var nombre = '2'; 
-Tiene el alcance delimitado por una funcion
-Variable local
ES6
definicion de una variable 
let nombre = 'valor';
Tiene un alcance delimitado por el bloque de codigo
Variable local

//Funciones en JavaScript
//Estructura de una función:

/*function name_function(parameter){
...

}*/

//recorridos o iteradores 
//ES5
/*for(var i=0;i<5;i++){
console.log(i);
}
console.log(i)
//Estructura: 
//for(var variable_inicializacion;condicion;iterador)

/*ES6
for(let i=0;i<5;i++){
    console.log(i);
}
console.log(i);
*/
/*
var i='casa';
for(let i=0;i<5;i++){
  console.log(i);
}
console.log(i);
*/
//FUNCIONES FLECHAS:
//ES5 
/*
function sumar(a,b){
    return a+b;
}
sumar(5,10);
console.log(sumar);
*/
//ES6
/*
var sumar=(a,b)=>a+b;
alert(sumar(5,10));
*/

/*
 let suma=(a,b)=>a+b;
 let resta=(a,b)=>a-b;
 let producto=(a,b)=>a*b;
 let dividir=(a,b)=>a/b;
 alert('suma a+b='+suma(5,10)+'\nresta a-b='+resta(5,10)+
 '\nproducto a*b='+producto(5,10)+'\nDivision a/b='+dividir(5,10));
*/
/*
 var  operaciones=(a,b,c)=>{
    if(a=='sumar'){            
        alert('Suma a+b='+(b+c));    
    }
    else if(a=="resta"){
        alert('Resta a-b='+(b-c)); 
        }  
        else if(a=="producto"){
            alert('Producto a*b='+(b*c)); 
            } 
            else if(a=="division"){
                alert('Dividir a/b='+(b/c)); 
                } 

 }; operaciones('division',5,6);
*/
var a=prompt('Ingrese s para suma, r resta, p producto o d dividir:','');//Ingreso por teclado
var operaciones=(b,c)=>{

switch (a) {
    case 's':
    alert('Suma a+b='+(b+c));
    break;
      case 'r':
      alert('Resta a-b='+(b-c)); 
        break;
        case 'p':
        alert('Producto a*b='+(b*c)); 
        break;
        case 'd':
        alert('Dividir a/b='+(b/c));
        break;
} 
}
operaciones(2,8);
