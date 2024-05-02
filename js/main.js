'use strict';

const ul = document.querySelector('ul.list');

//Scrivo un programma che stampi in console i numeri da 1 a 100
for (let number = 1; number <= 100; number++) {
    const li = document.createElement('li');
    //sostituisco i numeri multipli di 15 con FizzBuzz
    if (number % 15 == 0) {
        console.log ("FizzBuzz");
    }
    //sostituisco i numeri multipli di 3 con Fizz
    else if (number % 3 == 0) {
        console.log ("Fizz");
    }
    //sostituisco i numeri multipli  5 con Buzz
    else if (number % 5 == 0) {
        console.log ("Buzz");
    }
    //numero normale visibile in console
    else {
        console.log (number);
    }
}



