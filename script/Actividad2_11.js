/* Escribe un fragmento de código donde se aprecie la diferencia de usar 
los tipos de variables let, var, const. */

//la variable const nunca cambia,siempre tiene el mismo valor
const IVA = 21;
//la variable let puede cambiar segun el valor que se le asigne
let precio = 30 * ((IVA / 100) + 1);
console.log("El precio final es " + precio);

precio = 40 * ((IVA / 100) + 1);
console.log("El precio final es " + precio);


var unaVariable="Hola.";

function unaFuncion(){
    var unaVariable="Hola,dentro de la funcion."
    
}
unaFuncion(); 
console.log(unaVariable);
