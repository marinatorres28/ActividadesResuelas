/* Escribe un fragmento de código donde se aprecie la diferencia de usar 
los tipos de variables let, var, const. */

//en el siguiente ejemplo podemos ver como la constante IVA siempre va a tener el mismo valor
const IVA = 21;

let precio = 30 * ((IVA / 100) + 1);
console.log("El precio final es " + precio);

//en cambio la variable precio (let) se le podrá asignar otro valor
precio = 40 * ((IVA / 100) + 1);
console.log("El precio final es " + precio);



