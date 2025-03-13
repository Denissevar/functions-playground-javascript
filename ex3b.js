/**
 * Contesta a todas las preguntas. En este ejercicio no tienes que codificar nada.
 */

function isPositive(num) {
  return num > 0;
}

/**
 * 1. ¿Que nombre tiene esta función? "isPositive"
 * 2. ¿Que deberíamos escribir para ejecutar esta función? `isPositive(5);`
 * 
 * 
 * 3. ¿Qué tipo de datos devuelve esta función? ¿Un string, un number o un boolean? bolean proque usa un condicional verdadero o falso
 * 4. El código de abajo usa la función isPositve. ¿La usa adecuadamente? ¿Por qué?
 */

let x = 4;
if (!isPositive(x)) {
  console.log("El número es negativo");
} else {
  console.log("El número es positivo");
}
let resultado1= isPositive(1);
return num > 0;