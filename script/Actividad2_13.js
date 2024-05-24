/* Calculadora. El programa debe pedirle al usuario un numero, despues un simbolo (+,-,*,/,**,%) y despues otro numero. El programa debe mostrar por consola el resultado de la operacion.  */

let numero1=Number(prompt("Indica un numero"));
let simbolo=prompt("Indica un simbolo (+,-,*,/,**,%)");
let numero2=Number(prompt("Indica otro numero"));
let resultado=0;

switch(simbolo){
    case "+":{
        resultado=numero1+numero2;
        console.log(numero1 + "+" + numero2 + "=" + resultado);
        break;
    }

    case "-":{
        resultado=numero1-numero2;
        console.log(numero1 + "-" + numero2 + "=" + resultado);
        break;
    }

    case "*": {
        resultado=numero1*numero2;
        console.log(numero1 + "*" + numero2 + "=" + resultado);
        break;

    }

    case "/": {
        resultado=numero1/numero2;
        console.log(numero1 + "/" + numero2 + "=" + resultado);
        break;
    }

    case "**": {
        resultado=numero1**numero2;
        console.log(numero1 + "**" + numero2 + "=" + resultado);
        break;
    }

    case "%": {
        resultado=numero1%numero2;
        console.log(numero1 + "%" + numero2 + "=" + resultado);
        break;
    }
}



