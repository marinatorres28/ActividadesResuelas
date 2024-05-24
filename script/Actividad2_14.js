/* Calcular la letra de un DNI que debe introducir el usuario por teclado. 
numeroDNI/23 */

//pedimos el numero del DNI 
let numeroDNI=Number(prompt("Indica tu número de DNI sin letra"));
//creamos un array con las letras de los DNI
let letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];

//formula para calcular el dni
let letraDNI= numeroDNI % 23;
//con el calculo de la letra, le asignamos la letra del array a la letra del DNI según su posicion en el array
console.log(letras[letraDNI]);

alert("Tu DNI es: " + numeroDNI + " y su letra es " + letras[letraDNI] )



