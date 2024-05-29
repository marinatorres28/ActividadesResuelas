/* Crea un programa que muestre los numeros impares que no sean multiplos de 3 ni de 7 que hay del 100 al 1.
Realiza versiones del programa usando bucles while, do while, y for */

// Version del FOR

//i = 100 (ya que el bucle tiene que recorrer hasta el 100)
for( let i = 100; i > 0; i--) {
    //si el resto de i entre 2 es 0, y el resto de i entre 3 y 7 es 0,se saca i (que no saque los multiplos de 3 y 7)
    if ((i % 2 != 0) && (i % 3 != 0 && i % 7 != 0)) {
        console.log(i);
    }
}

// Version del WHILE

let i = 100;
while ( i > 0) { //mientras i sea mayor que 0, se mete dentro del bucle
    //si el resto de i entre 2 es 0, y el resto de i entre 3 y 7 es 0,se saca i (que no saque los multiplos de 3 y 7)
    if ((i % 2 != 0) && (i % 3 != 0 && i % 7 != 0)) {
        console.log(i);
    }
    //decrementos i,para que vaya haciendo 100,99,98,97...
    i--;
}



// Version del DO WHILE

let j = 100;
do {
    if ((j % 2 != 0) && (j % 3 != 0 && j % 7 != 0)) {
        console.log(j);
    }
    j--;
} while( j > 0)