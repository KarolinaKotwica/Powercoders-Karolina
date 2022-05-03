/* 
const singleBook = {
    title: "The prisoner of Azkaban",
    author: "J. K. Rowling",
    published: 1999,
    numberOfPages: 448,
    rating: 5,
    bestseller: true,
    series: "Harry Potter",
    volume: 3,
    ISBN: "0439136350",
    publisher: "Scholastic",
    bookmarkedPage: 325,
    loadBookmarkedPage: function(){
        return this.bookmarkedPage;
    },
    staticArrowFunction: () => "I am a static return value."
};

// object constructor based on object singleBook
function Book(title, author, published, numberOfPages, rating, bestseller, series, volume, ISBN, publisher, bookmarkedPage){
    this.title = title;
    this.author = author;
    this.published = published;
    this.numberOfPages = numberOfPages;
    this.rating = rating;
    this.bestseller = bestseller;
    this.series = series;
    this.volume = volume;
    this.ISBN = ISBN;
    this.publisher = publisher;
    this.bookmarkedPage = bookmarkedPage;
    this.loadBookmarkedPage = function(){
        return this.bookmarkedPage;
    };
    this.staticArrowFunction = () => "I am a static return value."
}

let potter1 = new Book("Harry Potter and philospher's stone","J. K. Rowling", 1997, 350, 5, true, "Harry Potter", 1, "090909090", "Scholastic",0);

let potter2 = new Book("Harry Potter and the chamber of secrets","J. K. Rowling", 1998, 350, 5, true, "Harry Potter", 2, "090909090", "Scholastic",0);

let potter3 = new Book("Harry Potter and the prisoner of Azkaban","J. K. Rowling", 1999, 350, 5, true, "Harry Potter", 3, "0439136350", "Scholastic",325);

potter1.bookmarkedPage = 24;
potter1.used = true;

//console.table(potter1);

console.table(Object.keys(potter1));
console.log(Object.values(potter1));

delete potter1.used;


console.log(`"${potter3.title}" by ${potter3.author}`);

potter3.title = "Harry Potter and the prisoner of Azkaban";
console.log(`"${potter3["title"]}" by ${potter3["author"]}`);

console.log(potter1["loadBookmarkedPage"]());


var topics = ["HTML","CSS","JS"];
topics.push('git');
topics[15] = "CLI";
topics[12] = "Github";
// array method to add items at the end of the list
topics.push('React');
// array method to remove item from the list
topics.pop('React');
// array method to remove first item from the list
topics.shift();
topics[2] = "jQuery"; 
// array method to remove specific item from the list, in that case index 2
topics.splice(2,1);

console.log(topics[16]);
console.table(topics);

var skills = [
    ['JavaScript','Python','R'],
    ['VSC','Github','ABC']
]
console.table(skills);
console.table(skills[1]);
console.log(skills[1][1]);

skills = [
    {
        frontend: 'JavaScript',
        backend: ['JavaScript','Python'],
        dataScience: ['Python','R']
    }, 
    {
        editor: 'VSC',
        versionControl: ['Github','git']
    }
]

console.log(skills[1].editor);
console.log(skills[1]['editor']);

var topics2 = new Array(3);
topics2[0] = "HTML";
topics2[1] = "CSS";
topics2[2] = "JS";  

console.log(topics2[3]);


// array method to merge two lists
let mergedTopics = topics.concat(topics2);
mergedTopics.sort();
console.table(mergedTopics);

var topics3 = [];
console.log(topics.length);
console.log(topics2.length);
console.log(topics3.length);

topics.forEach(topic => console.log(topic));

for(let i = 0; i < topics.length; i++){
    if(topics[i] !== undefined){
        console.log(topics[i]);
    }
}

Exercise: Mad Lib
Do your Mad Lib exercise again:
Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.

Write a function and store the variables in an array - or better an object?

Exercise: Fortune Teller
Do the Fortune Teller again but this time with a object.
Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
Exercise: Your top choices
Create an array to hold your top choices (colors, presidents, whatever).
For each choice, log to the screen a string like: "My #1 choice is blue."
Change your top choices into objects, e.g. presidents with name, year of presidency, etc as properties.
Work on your project
© 2022 Powercoders

Exercise: 
Your top choices 
1. Create an array to hold your top choices (colors, presidents, whatever). 
2. For each choice, log to the screen a string like: "My #1 choice is blue." 
3. Change your top choices into objects, e.g. presidents with name, year of presidency, etc as properties.


let favoriteAnimals = ['monkey','lion','panda','cat','falcon'];
favoriteAnimals.forEach(function(animal,index){
    console.log(`My #${index+1} favorite animal is ${animal}.`);
});
favoriteAnimals.forEach((animal,index) => {
    console.log(`My #${index+1} favorite animal is ${animal}.`);
});


for(let i = 0; i < favoriteAnimals.length; i++){
    console.log(`My #${i+1} favorite animal is ${favoriteAnimals[i]}.`);
}
let i = 0;
while(i < favoriteAnimals.length){
    console.log(`My #${i+1} favorite animal is ${favoriteAnimals[i]}.`);
    i++;
}

let favoriteAnimals = ['monkey','lion','panda','cat','falcon'];
let i = 1;
for (const animal of favoriteAnimals) {
    console.log(`My #${i} favorite animal is ${animal}.`);
    i++;
}
*/

const presidents = {
    names: ['Putin','Trump'],
    countries: ['Russia','USA']
}

let presidentList = [
    {
        lname: 'Putin',
        country: 'Russia'
    },
    {
        lname: 'Biden',
        country: 'USA'
    }
]

presidentList.forEach(president => {
    console.log(`The president of ${president.country} is ${president.lname}.`)
})
