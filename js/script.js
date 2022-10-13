/* **Consegna:**
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */


const fizz = 'Fizz';
const buzz = 'Buzz';
const fizzBuzz = 'FizzBuzz';
const limit = 100;
const container = document.querySelector('.container');

for(let i = 1; i <= limit; i++){

    const box = document.createElement('div');
    box.className ='box';
    console.log(box);
    box.innerHTML = i;
    container.append(box)

    if(i % 3 === 0){
       box.innerHTML = fizz;
       box.classList.add('red')
    }else if(i % 5 === 0){
        box.innerHTML = buzz;
        box.classList.add('blue')
    }else{
        console.log(i);
        box.classList.add('orange')
    }

    if(i % 5 == 0 && i % 3 == 0){
        box.innerHTML = fizzBuzz;
        box.classList.add('yellow')
    }
}