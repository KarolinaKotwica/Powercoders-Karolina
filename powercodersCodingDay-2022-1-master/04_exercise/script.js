var paragrafBooks = document.getElementById('books');

var books = [
    {
        author: "Jon",
        title: "One Day",
        hasBeenSold: true,
        price: 45
    },
    {
        author: "Adele",
        title: "Some title",
        hasBeenSold: false,
        price: 25
    },
    {
        author: "Natalia",
        title: "Example title",
        hasBeenSold: false,
        price: 100
    }

];


books.forEach((book) => {
    let par = document.createElement('p');
    paragrafBooks.appendChild(par);
    paragrafBooks.innerHTML += `Title: ${book.title}<br> Author: ${book.author}<br> Sold: ${book.hasBeenSold ? "Yes" : "No"}<br> Price: ${book.price} CHF<br><br>`;
});

function addBook() {
    let authorValue = document.getElementById('author').value;
    let titleValue = document.getElementById('title').value;
    let priceValue = document.getElementById('price').value;

    let newPosition = {
        author: authorValue,
        title: titleValue,
        hasBeenSold: false,
        price: priceValue
    }

    // My object doesn't add to the array, but I can see him in a console.log
    console.log(newPosition);

    books.push(newPosition);
}