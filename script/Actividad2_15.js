/* desarrolla un programa que pida un numero y calcule su factorial */

let num=Number(prompt("Escribe un numero"));
let resultado=1; 

for (let i = num; i >= 1; i--) {
    //i = num ; mientras i sea mayor o igual a 1, i disminuye
     resultado = resultado * i;
}

alert("El factorial de " + num + " es " + resultado);

