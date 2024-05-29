/* Escribe un programa que ponga en practica la siguiente logica:
a) Area del triangulo (b*h/2) 
b) Area del rectangulo (b*h)
c) Area del circulo (pi * r **2)
d) Salir

En funcion de la opcion que elija el usuario, se le pediran los datos necesarios en cada caso.
El programa calculara el resultado y lo mostrara en la consola.
La logica anterior se repetira indefinidamente hasta que el usuario pulse la tecla salir.
*/

//para la realizacion del programa utilizaremos un bucle while, que se repetira hasta que escojamos la opcion d 
let opcion = '';

while(opcion != "d") {
    opcion=prompt("Indica tu opcion. \n\ta. Area del triangulo\n\tb. Area del rectangulo\n\tc. Area del circulo\n\td. Salir");
    
    switch(opcion){
        case "a":{
            let base=prompt("Indica la base del triangulo")
            let altura=prompt("Indica la altura del triangulo")
            let areaT= base*altura/2;
            alert("El area del triangulo es " + areaT)
            break;
        }

        case "b":{
            let baseC=prompt("Indica la base del cuadrado ")
            let alturaC=prompt("Indica la altura del cuadrado ")
            let areaC=baseC*alturaC;
            alert("El area del cuadrado es " + areaC)
            break;
        }

        case "c":{
            let radio=prompt("Indica el radio del circulo ");
            let areaCi= Math.PI*radio**2;
            alert("El area del círculo es " + areaCi)
            break;
        }
        case "d": {
            alert("Gracias por usar nuestro programa. ¡Hasta pronto!")
            break;
        }
        default: alert("Indica una opción válida")
    }
}