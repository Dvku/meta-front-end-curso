/*

Tarea 1: Uso del operador lógico &&
    Estás programando un juego RPG, donde cada personaje tiene ciertos 
    niveles de habilidad basados en el valor guardado en su puntuación.

    1- Crea una variable llamada score y establécela como 8

    2- Usa console.log() que incluye la cadena "Mid-level skills:" y compara la variable score 
    por encima de 0 y por debajo de 10 usando el operador && 

*/

var score = 8;
console.log('Mid-level skills:', score > 0 && score < 10);

/* 

Tarea 2: Utilización del operador lógico || 
    Imagina que estás programando un videojuego. En este momento, estás a punto 
    de codificar algunos fragmentos relacionados con la condición game over.

    Necesitas codificar una nueva variable llamada timeRemaining y establecerla en 0. 
    También necesitas codificar una nueva variable llamada energy y establecerla en 10.

    A continuación, debe escribir un fragmento de código que se podría utilizar para determinar 
    si el juego ha terminado, basado en si el valor de la variable timeRemaining es 0 o el valor
    de la variable energy es 0.

    Completa la tarea siguiendo los siguientes pasos:

    1- Declara la variable timeRemaining y asígnale el valor 0.

    2- Declare la variable energy y asígnele el valor de 10.

    3- Registra en la consola los siguientes parámetros: "Game over: ", y timeRemaining == 0 || energy == 0
*/

var timeRemaining = 0;
var energy = 10;

console.log('Game over: ', timeRemaining == 0 || energy == 0);

/*

Tarea 3: Uso del operador módulo, %, para comprobar si un número dado es impar
    Necesitas codificar un pequeño programa que tome un número y determine si es un número par 
    (como 2, 4, 6, 8, 10).

    Para ello, debes declarar seis variables, como se indica a continuación:

    1- A la primera variable, llamada num1,  se le debe asignar un valor numérico de 2.

    2- A la segunda variable, denominada num2, se le asignará el valor numérico 5.

    3- A la tercera variable, llamada test1, se le debe asignar el cálculo de num1 % 2. Nota: la ejecución de este código devolverá un número. Nota: El operador módulo % devuelve el resto cuando un número se divide por otro. Si un número es par, al dividirlo por 2 no quedará ningún resto (0).

    4- A la cuarta variable, llamada test2, se le debe asignar el cálculo de num2 % 2. Nota: la ejecución de este código también devolverá un número.

    5- A la quinta variable, llamada result1, se le asignará el resultado de comprobar si el número almacenado en la variable test1 es igual a 0, en otras palabras: test1 == 0.

    6- A la sexta variable, llamada result2, se le debe asignar el resultado de comparar si el número almacenado en la variable test2 es igual a 0, en otras palabras: test2 == 0.

*/

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;

console.log('Is', num1, 'an even number?', result1);
console.log('Is', num2, 'an even number?', result2);

/* 

Tarea 4: Suma de números utilizando el operador +
Registra en la consola el resultado de sumar dos números, 5 y 10, utilizando el operador +.

*/

console.log(5 + 10);

/*

Tarea 5: Concatenar números y cadenas utilizando el operador +
    Codifique tres variables:

    1- La primera variable debe ser una cadena con el siguiente valor: "Now in ". Nombre la variable now.

    2- La segunda variable debe ser un número con el valor: 3. Nombre de la variable three.

    3- La tercera variable debe ser una cadena con el siguiente valor: "D!". Nombre de la variable d.

    4- Registre en la consola el siguiente código: now + three + d.

*/

var now = 'Now in ';
var three = 3;
var d = 'D!';

console.log(now + three + d);

/*

Tarea 6: Utilizar el operador += para acumular valores en una variable
    Codifique una nueva variable y nómbrela counter, asignándole el valor de 0.

    En la línea siguiente, utilice el operador += para incrementar el valor del contador en 5.

    En la línea siguiente, utilice el operador += para aumentar el valor del contador en 3.

    En la cuarta línea, la consola registra el valor de la variable counter.

*/

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);
