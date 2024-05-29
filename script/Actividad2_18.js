/* Idea un programa en el que usar un bucle do while sea mejor idea que usar un bucle while */

let letra = "";

do{
    letra = prompt("Indica una letra");

    if (letra == "a") {
        console.log("Has acertado.");
    }
    else {
        console.log("No ha habido suerte.");
    }
}
while (letra != "a") {
}