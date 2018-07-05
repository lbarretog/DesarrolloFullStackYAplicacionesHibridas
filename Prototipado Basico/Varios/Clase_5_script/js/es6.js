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
/*
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
*/

//CONST solo ES6 no existe en el ES6
/*
const a=5;
console.log(a);
*/
//CONCATENAR
/* ES5
Concatena con un signo mas(+)
en ES6 se llama Template String */


//Cadenas de más de una línea
//ES5
/*
console.log("línea 1 de cadena de texto\n\
línea 2 de cadena de texto");
// "línea 1 de cadena de texto
// línea 2 de cadena de texto"

//ES6
// Para obtener el mismo efecto con cadenas de texto multilínea, con ES6 es posible escribir:
console.log(`línea 1 de la cadena de texto 
línea 2 de la cadena de texto`);
// "línea 1 de la cadena de texto
// línea 2 de la cadena de texto"
*/
//Interpolación de expresiones
//ES5
/*
var a = 5;
var b = 10;
console.log("Quince es " + (a + b) + " y\nno " + (2 * a + b) + ".");
// "Quince es 15 y
// no 20."

ES6

var a = 5;
var b = 10;
console.log(`Quince es ${a + b} y\nno ${2 * a + b}.`);
// "Quince es 15 y
// no 20."
*/
//Taller
/*
let a=5;
let b=6;
 alert(`suma a+b=${a+b} 
resta a-b=${a-b}
producto a*b=${a*b}
division a/b=${a/b}`);
*/
/*
var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hola "
  console.log(strings[1]); // " mundo "
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

tag`Hola ${ a + b } mundo ${ a * b}`;
// "Bazinga!"
*/
/*
`${console.warn("this es",this)}`; // "this es" Window

let a = 10;
console.warn(`${a+=20}`); // "30"
console.warn(a); // 30
*/

//DESTRUCTURING -> nueva forma de asignar Arrays a Objetos
//ES6
/*
var [a,b]=["hola","mundo"];
console.log(a);//hola
console.log(b);//mundo

var a=["hola","mundo"];
var [b,c]=[a[0],a[1]];
console.log(b);
console.log(c);

var obj={nombre:"carlos",apellido:"Rojo"};
var {nombre,apellido}=obj;
console.log(nombre);
*/
/*
var foo=function(a,b,c){
    return[a+b,b*c];
};
var[suma, producto]=foo(1,2,3);
console.log(suma);//175
*/
//VALORES POR DEFECTO EN PARAMETROS
function suma (a=0,b=0){
    return a+b;
}
console.log(suma(2,8));
alert(suma(2));



