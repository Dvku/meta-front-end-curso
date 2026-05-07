/*

Tarea 1: Codificar una declaración de función
Deberá codificar una declaración de función llamadaaddTwoNums, que 
acepta los númerosa yb y los registros de consola a + b.

Tarea 2: Invocar la funciónaddTwoNums con un número y una cadena de caracteres
Deberá invocar la funciónaddTwoNums utilizando los siguientes 
argumentos: 5 y"5".

Nota: Pasar un número y una cadena resultará en"55"(concatenación de cadenas) 
debido a la coerción de tipos de JavaScript. Esto se solucionará más adelante 
cuando añadas la lógica de comprobación de tipos en la Tarea 4.

Tarea 3: Actualizar la funciónaddTwoNums con un bloque try..catch 
Añada los bloques try y catch dentro del cuerpo de la definición de la 
función. Por ahora, asegúrate de que el registro de la consola de a + b está 
dentro del bloque try. Además, el bloquecatch debe capturar un error 
llamado err y, dentro del cuerpo del bloquecatch, debes registrar en la 
consola el valor de err.

Tarea 4: Si los argumentos pasados no son números, lanza un error
Si alguno de los argumentos pasados a la función addTwoNums no es un número, 
lanzará un error.

En concreto, codifique una condicional con la siguiente lógica:

Si el typeof el parámetroa no es igual a'number', lance un nuevo TypeError. 
Dentro de TypeError, incluya el mensaje de error 
personalizado: 'The first argument is not a number.'

Else si typeof el parámetrob no es igual a'number', lanza un nuevo TypeError.
Dentro de TypeError, incluya el mensaje de error 
personalizado: 'The second argument is not a number.'

Else, registra la suma de a + b en la consola.

Una vez que haya completado esta tarea

Envuelva toda la lógica condicional dentro del bloque try.

El bloque catch manejará cualquier error arrojado por los condicionales y 
los registrará apropiadamente.

Nota: ¿Cómo maneja esto la coerción de tipos?

Comprobando explícitamentetypeof de a y b, la función se asegura de que 
sólo se aceptan números.

Pasar una cadena como "5" ya no resultará en "55" porque el error detendrá 
la ejecución antes de la operación de suma.

Tarea 5: Actualizar el bloque catch 
Dentro del bloque catch, actualice el código de console.log(err) a 
console.log("Error!", err).

Tarea 6: Invocar la función addTwoNums
Invoque la función addTwoNums utilizando 5 y"5" como argumentos.

Tarea 7: Añada otro registro de consola bajo la invocación de la 
funciónaddTwoNums
Añada otra línea de código que registre en consola la cadena 
"It still works".


*/

function addTwoNums(a, b) {
  try {
    if (typeof a !== 'number') {
      throw new TypeError('The first argument is not a number.');
    } else if (typeof b !== 'number') {
      throw new TypeError('The second argument is not a number.');
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log('Error!', err);
  }
}
addTwoNums(5, '5');
console.log('It still works');
