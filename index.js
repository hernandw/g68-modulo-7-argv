const argumento = process.argv.slice(2);

console.log(argumento);

let opcion = argumento[0];

let number1 = argumento[1];

let number2 = argumento[2];

let suma = Number(number1) + Number(number2);
let resta = Number(number1) - Number(number2);
let division = Number(number1) / Number(number2);
let multiplicacion = Number(number1) * Number(number2);

/* console.log('la opcion seleccionada es', opcion)
console.log('El numero 1 es: ', number1)
console.log('El numero 2 es: ', number2) */

if (opcion === "suma") {
  console.log("El valor de la suma es:", suma);
} else if (opcion === "resta") {
  console.log("El valor de la resta es:", resta);
} else if (opcion === "division") {
  console.log("El valor de la division es:", division);
} else {
  console.log("El valor de la multiplicacion es:", multiplicacion);
}
