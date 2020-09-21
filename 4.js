/*4- Define una función que dado un array de números nos dice si alguno es par.*/

const array = [1,2,3];

const par = (array) => array % 2 === 0;

console.log(array.some(par));

// OK