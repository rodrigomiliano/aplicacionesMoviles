/*3- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

numero = 4;

function esParOImpar(numero) {
  if (numero % 2 == 0) {
    return numero + " Es par";
   }else{ 
    return numero + " Es impar";
  }
}

console.log(esParOImpar(numero));

/*
numero = 4;

function esParOImpar(numero) {
  return numero % 2 == 0 ? numero + " Es par" : numero + " Es impar";
}

console.log(esParOImpar(numero));
*/

// OK