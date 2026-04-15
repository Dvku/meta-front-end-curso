/*

Ejercicio 1

En este ejercicio, creará el código para un for loop, utilizando la variable 
contador llamada i empezando por 1.

Para hacer que el contador se incremente en 1 en cada bucle, utilizará i++.

La condición de salida para el bucle for debe coincidir con la salida dada a continuación. 

Dentro del bucle, escriba una sentencia if-else, que comprobará las siguientes 
condiciones:

    1- Primero, comprobará si el valor de i es  1. Si lo es, su código registrará por consola
       la cadena "Medalla de oro".

    2- A continuación, comprobará si el valor de i es 2. Si lo es, su código registrará por 
       consola la cadena "Medalla de plata" .

    3- A continuación, su código comprobará si el valor de i es 3. Si lo es, registrará en 
       consola la cadena "Medalla de bronce" .

    4- Para todos los valores restantes de i, su código registrará en consola sólo el valor 
       de i.

Nota: El registro de consola esperado de todo el código debería ser el siguiente
Medalla de oro
Medalla de plata
Medalla de bronce
4
5
6
7
8
9
10

*/

for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log('Gold medal');
  } else if (i == 2) {
    console.log('Silver medal');
  } else if (i == 3) {
    console.log('Bronze medal');
  } else {
    console.log(i);
  }
}

/*
Ejercicio 2. Utilice el código completado de la tarea anterior, pero convierta los 
condicionales en una sentencia switch.
Cuando codifique la solución, la salida en la consola debe seguir siendo exactamente 
la misma que en la pregunta anterior.

Nota: Necesitará tres casos distintos para las tres medallas y un caso por defecto para 
todos los demás valores de la variable i.
*/

for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log('Gold medal');
      break;
    case 2:
      console.log('Silver medal');
      break;
    case 3:
      console.log('Bronze medal');
      break;
    default:
      console.log(i);
  }
}
