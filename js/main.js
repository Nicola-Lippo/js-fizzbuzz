'use strict';

//Scrivo un programma che stampi in console i numeri da 1 a 100
for (let number = 1; number <= 100; number++) {
    //sostituisco i numeri multipli di 3 con Fizz
    if (number % 3 == 0) {
        console.log ("Fizz");
    }
    //sostituisco i numeri multipli di 5 con Buzz
    else if (number % 5 == 0) {
        console.log ("Buzz");
    }
    //sostituisco i numeri multipli sia di 3 che di  5 con FizzBuzz
    else if (number % 3 == 0 && number % 5 == 0) {
        console.log ("FizzBuzz");
    }
    //numero normale visibile in console
    else {
        console.log (number);
    }
}



