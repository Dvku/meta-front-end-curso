/*
    Tareas
    1- Declara una nueva variable llamada petDog y dale el nombre Rex.

    2- Declara una nueva variable llamada petCat y dale el nombre Pepper.

    3- Registra la variable petDog en la consola.

    4- Registra la variable petCat en la consola.

    5- Registra lo siguiente en la consola: el texto "My pet dog's name is: " y la variable petDog.

    6- Registra lo siguiente en la consola: el texto "My pet cat's name is: " y la variable petCat.

    7- Declara otra variable y llámala catSound. Asígnale la cadena "purr".

    8- Declara otra variable y llámala dogSound. Asígnale la cadena "woof".

    9- Registra lo siguiente en la consola: la variable petDog, luego la cadena "says", luego la variable dogSound.

    10- Registra lo siguiente en la consola: la variable petCat, luego la cadena "says", luego la variable catSound.

    11- Reasigne el valor almacenado en catSound a la cadena "meow".

    12- Registre lo siguiente en la consola: la variable petCat, luego la cadena "now says", luego la variable catSound.
*/

var petDog = 'Rex';
var petCat = 'Pepper';
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is:" + petDog);
console.log('My pet cat´s name is:' + petCat);
var catSound = 'purr';
var dogSound = 'woof';
console.log(petDog, 'says', dogSound);
console.log(petCat, 'says', catSound);
catSound = 'meow';
console.log(petCat, 'now says', catSound);
