/* Escribe un conversor de tiempo. El programa debe pedirle al usuario una cantidad de dias,horas y minutos y 
el programa devolverá la cantidad de segundos que son. */

let dias=Number(prompt("Indica el día"));
let horas=Number(prompt("Indica la hora"));
let minutos=Number(prompt("Indica los minutos"));

//inicializamos la variable segundos en 0
let segundos=0;


// Añadimos los segundos que hay en los minutos (1 minuto -> 60 segundos)
segundos = segundos + minutos * 60;

// Añadimos los segundos que hay en las horas (1 hora -> 60 minutos, 1 minuto -> 60 segundos)
segundos = segundos + horas * 60 * 60;

// Añadimos los segundos que hay en los dias (1 dia -> 24 horas, 1 hora -> 60 minutos, 1 minuto -> 60 segundos )
segundos = segundos + dias * 24 * 60 * 60;

alert("Segundos -> " + segundos);













