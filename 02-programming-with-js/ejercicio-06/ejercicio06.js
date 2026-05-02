/*
Tareas a realizar
1- Crea un nuevo literal de array vacío y asígnalo a la 
variable clothes.

2- Añade 5 de tus prendas de ropa favoritas como cadenas 
utilizando el método push().

3- Elimina la quinta pieza de ropa del array utilizando el método pop().

4- Añade una nueva prenda de ropa utilizando el método push().

5- Utiliza console.log para mostrar el tercer elemento del array 
clothes en la consola.

6- Crea un nuevo objeto literal vacío y asígnalo a la variable favCar.

7- Usando la notación de puntos, asigna una propiedad color al 
objeto favCar y dale un valor de cadena con el color de tu elección.

8- Usando la notación por puntos, asigna una propiedad convertible 
al objeto favCar y dale un valor booleano de tu elección.

9- Utiliza la consola para registrar todo el objeto favCar.

*/

var clothes = [];

clothes.push('polera', 'buzo', 'poleron', 'zapatillas', 'gorro');

clothes.pop();

clothes.push('reloj');

console.log(clothes[2]);

var favCar = {};

favCar.color = 'negro';

favCar.convertible = true;

console.log(favCar);
