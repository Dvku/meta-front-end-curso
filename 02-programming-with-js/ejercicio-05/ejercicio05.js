/*

Tarea 1:
Escriba una función llamada letterFinder que acepte dos parámetros: word y match

Tarea 2:
Codifique un bucle for dentro del cuerpo de la función. El contador del bucle for debe 
comenzar en cero, incrementarse en 1 en cada iteración y ejecutarse mientras el valor de 
la variable del contador sea menor que la longitud del parámetro word.

Tarea 3:
Dentro del buclefor, utilice la variable contadori para acceder a cada letra de word, 
lo que nos permitirá utilizarword[i].

Compruebe si elword[i] actual es igual al valor de match

Nota: Las cadenas son como las matrices. Se puede acceder a cada letra de la cadena 
utilizando un índice, empezando por 0. Utiliceword[i] para acceder a una letra en el 
índice. i

Tarea 4:
Si es verdadero, registre: console.log('Found the', match, 'at', i)

Tarea 5:
Ahora escribe la condición else. Aquí sólo registrarás en la consola lo siguiente: 
console.log('---No match found at', i) whenword[i] !== match

Nota: La sentenciaelse se ejecuta si la condición if no se cumple. Úsala para manejar 
situaciones en las que las letras no coincidan.

Tarea 6:
Llama a la función letterFinder y pásale como primer argumento la cadena "test" y como 
segundo argumento, la cadena "t"

Nota: Para ejecutar la función, la llamarás con argumentos específicos. Aquí, 
pasa la cadena "test" y la letra "t" para ver cómo funciona la función.

El resultado debería ser el siguiente:

Found the t at 0

---No match found at 1

---No match found at 2

Found the t at 3
*/

function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log('Found the', match, 'at', i);
    } else {
      console.log('---No match found at', i);
    }
  }
}

letterFinder('test', 't');
