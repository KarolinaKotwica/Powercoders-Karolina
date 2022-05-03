/** Let's recap what we learned so far */
let testString = 'This is a string';
const pi = 3.14;
var checkThis = true;
let variable;
let animals = ['cat','dog','mouse'];
animals[15]='falcon';
/*
for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

let i = 0;
while(i < animals.length){
    console.log(animals[i]);
    i++;
}

do {
    console.log(animals[i]);
    i++;
} while(i < animals.length)

animals.forEach(animal => console.log(animal));

// for of loop
for(let animal of animals){
    console.log(animal);
}

// for in loop
for(let x in animals){
    console.log(animals[x]);
}
let person = {
    lastName: 'Koenig',
    firstName: 'Susanne',
    gender: 'female',
    isMarried: false,
    hasChildren: false,
    noOfChildren: 0,
    spokenLanguages: ['German','English','French'],
    languageSkills: {
        motherTongue: 'German',
        advanced: 'English',
        basic: ['French','Finnish'] 
    },
    getMaritialStatus: function(){
        return this.isMarried;
    }
}

for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

Object.keys.array.forEach(element => {
    
});

//function
calculate(5,7,'+');

let calculateAsExpression = function(number1, number2, operator){
    return number1;
}

let calculateAsArrow = (number1, number2, operator) => {
    switch(operator){
        case '+':
            return number1 + number2;
            break;  
        case '-':
            return number1 - number2;
            break;
        case '*':
            return number1 * number2;
            break;
        case '/':
            return number1 / number2;
            break;
        default:    
            return 'This is not a valid operator. Please use either +, -, * or /'
            break;
    }
}

calculateAsArrow(5,7,'+');

function calculate(number1, number2, operator){
    if(operator === '+'){
        return number1 + number2;
    } else if(operator === '-'){
        return number1 - number2;
    } else if(operator === '*'){
        return number1 * number2;
    } else if(operator === '/'){
        return number1 / number2;
    } else {
        return 'This is not a valid operator. Please use either +, -, * or /'
    }
}

*/
const testPerson = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

let {firstName, lastName, age} = testPerson;
const {eyeColor} = testPerson;

testPerson.firstName = 'Jane';

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            return whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
