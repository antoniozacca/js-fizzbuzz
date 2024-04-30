'use strict'

for (let i = 1; i <=100; i++) {
    //stampa in console FizzBuzz al posto di tutti i multipli di 3 e di 5
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        //stampa in console Fizz al posto di tutti i multipli di 3
    } else if (i % 3 === 0) {
        console.log("Fizz");
        //stampa in console Buzz al posto di tutti i multipli di 5
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else{
        console.log(i);
    }
}

// const ul = document.querySelector("ul.list");
// for (let i = 1; i<=100; i++) {
//     const element = `<li class="box box--${i}">${i}</li>`
//     ul.innerHTML += element;
    
// }
