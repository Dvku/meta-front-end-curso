/*

Para este ejercicio, asegurémonos de que los dos argumentos que 
se pasan satisfacen los siguientes criterios:

La longitud del parámetro word no puede ser inferior a 2.

La longitud del parámetro match debe ser 1.

El tipo de ambos parámetros word y match debe ser cadena.

Utilizará el código siguiente para completar su tarea:

function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

Estas son las tareas a completar:

1.- Justo encima del bucle for en la definición de la función 
letterFinder, declare una variable llamada condition1 y asígnele el 
siguiente código: typeof(word) == 'string' && word.length >= 2.

2.- Declare una variable llamada condition2 en la línea siguiente y 
asígnele y asígnele una comprobación que asegure que el tipo de 
match es una cadena Y que la longitud de la variable match 
es igual a 1.

3.- Escriba una sentencia if en la línea siguiente que 
compruebe que condition1 es true, y condition2 es true

4.- Mueva el resto del cuerpo de la función a la sentencia 
if que escribió en el paso anterior.

5.- Codifique un bloque "else" después de la condición "if" y 
console.log lo siguiente: "Please pass correct arguments to the 
function.".

6.- Como prueba de fallo, ejecute la función letterFinder y 
pásele dos números cualesquiera como argumentos.

7.- Como prueba de aprobación, ejecute la función letterFinder y 
pásela con los argumentos correctos, como: letterFinder("cat", "c").

*/

function letterFinder(word, match) {
  var condition1 = typeof word == 'string' && word.length >= 2;
  var condition2 = typeof match == 'string' && match.length == 1;
  if (condition1 && condition2) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        //if the current character at position i in the word is equal to the match
        console.log('Found the', match, 'at', i);
      } else {
        console.log('---No match found at', i);
      }
    }
  } else {
    console.log('Please pass correct arguments to the function.');
  }
}

letterFinder([], []);
letterFinder('cat', 'c');
