/*7- Define la función hayAlgunNegativo, que dada una lista de números nos dice si hay algún negativo*/

const array = [2,-3,9];

const hayAlgunNegativo = (array) => array < 0;

console.log(array.some(hayAlgunNegativo));

//OK