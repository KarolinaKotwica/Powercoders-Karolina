/*
Odd / even reporter 2.0
========================
Write a for loop that will iterate from 0 to 20.
For each iteration, it will check if the current number is even or odd.
Report the result to the screen (e.g. "2 is even").
> Let's try all different types of loop

// for loop
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        //template string always with back ticks
        console.log(`${i} is even`);
    } else {
        //contencated string with +
        console.log(i + ' is odd');
    }
}

// while loop
let i = 0;
while (i <= 20){
    i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
    i++; 
}

// do while loop
let i = 0;
do {
    i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
    i++; 
} while (i <= 20)

*/

// forEach loop
// looping through an array

let numbers = [];
for (let i = 0; i <= 20; i++) {
    numbers.push(i);
}
// callback function
numbers.forEach(function(number){
    if (number % 2 === 0) {
        //template string always with back ticks
        console.log(`${number} is even`);
    } else {
        //contencated string with +
        console.log(number + ' is odd');
    }
});

// functions
let user_name = prompt('Please tell me your name');
// argument in calling function
sayMyName(user_name);

// parameter in declaring function
function sayMyName(my_name) {
    alert(my_name);
}

let result = sum(1,2,3,7);
console.log(result);

result = sum(result);
console.log(result);

function sum(num1=0, num2=0, num3=0,...argument) {
    return num1 + num2 + num3;
}

let addUp = (num1=0, num2=0, num3=0,...argument) => num1 + num2 + num3;

result = sum(4,3,7);

countdown(10);
//recursive function
function countdown(value){
    if(value>0){
        console.log(value);
        countdown(value - 1);
    } else {
        console.log('Happy new year');
    }
}

let countdown_expression2 = value => {
    if(value>0){
        console.log(value);
        countdown_expression2(value - 1);
    } else {
        console.log('Happy new year');
    }
}

countdown_expression2(10);
countdown_expression2(100);