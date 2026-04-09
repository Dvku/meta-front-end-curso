/*
Complete los siguientes pasos para crear: ¿Tienes edad suficiente? 
    1- Declare una variable edad utilizando la palabra clave var y establézcala en el número 10.

    2- Añade una sentencia if que compruebe si el valor de la variable age es mayor o igual 
    que el número 65. Dentro del bloque if, console.log la sentencia: "Obtienes tus ingresos de tu pensión". (Utilizaremos console.log en todo el código para mostrar la salida en la consola, lo que nos ayudará a mostrar los resultados de las condiciones y a seguir el comportamiento del programa durante su ejecución)

    3- Añade un bloque "else if", donde comprobarás si el valor de la edad es menor que 65 y 
    mayor o igual que 18. Dentro de este bloque "else if", escribe "console.log" y a continuación 
    "Cada mes recibes un salario".

    4- Añade otro "else if", y esta vez comprueba si el valor de la edad es menor de 18 años. 
    Dentro del bloque "else if", escribe "console.log" y luego "Recibes un subsidio".

    5- Añada una sentencia "else" para capturar cualquier otro valor. Dentro del bloque, escriba 
    "console.log" y a continuación "El valor de la variable edad no es numérico".
*/

var age = 10;

if (age >= 65) {
  console.log('You get your income from your pension');
} else if (age < 65 && age >= 18) {
  console.log('Each month you get a salary');
} else if (age < 18) {
  console.log('You get an allowance');
} else {
  console.log('The value of the age variable is not numerical');
}

/*

Codifica el programa de los días de la semana como una sentencia switch
    1- En la siguiente línea, define una nueva variable, llámala day, y establece su valor a "Sunday".

    2- Comienza a codificar una sentencia switch, pasando la variable day como la expresión a evaluar.

    3- Dentro de switch, añade casos para cada día de la semana, empezando por "lunes" y 
    terminando por "domingo". Asegúrate de usar valores de cadena para los días. 
    Dentro de cada caso, por ahora, sólo añade un console.log('Do something'), y añade un break; 
    en la línea de abajo.

    4- Al final de la sentencia switch, añade el caso por defecto y añade un 
    console.log('There is no such day').

    5- Finalmente, actualice las llamadas console.log para cada caso, basándose en cualquier 
    actividad que tenga en cada uno de los días.

*/

var day = 'Sunday';

switch (day) {
  case 'Monday':
    console.log('Today is Monday');
    break;
  case 'Tuesday':
    console.log('Today is Tuesday');
    break;
  case 'Wednesday':
    console.log('Today is Wednesday');
    break;
  case 'Thursday':
    console.log('Today is Thursday');
    break;
  case 'Friday':
    console.log('Today is Friday');
    break;
  case 'Saturday':
    console.log('Today is Saturday');
    break;
  case 'Sunday':
    console.log('Today is Sunday');
    break;
  default:
    console.log('There is no such day');
}
