let search = document.getElementById('search').value;
let button = document.getElementById('button');
let output = document.getElementById('output');
let image = document.getElementById('image');

button.addEventListener('click', (e) => {
    e.preventDefault();

    // Find previous month and day
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    if(month < 10) {
        month = '0'+ month;
    }
    
    console.log(search);

    fetch(`https://newsapi.org/v2/everything?q=${search}&from=2022-${month}-${day}&sortBy=popularity&apiKey=22e26f00695c42d19f5c20df4b5baaac`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        for(let i = 0; i < data.articles.length; i++) {
            output.innerHTML += "<p class='title'>" + data.articles[i].title + 
            "</p><br /><img src='" + data.articles[i].urlToImage + "'>" +
            "</p><br /><p class='author'>Author: " + data.articles[i].author + 
            "</p><br /><p class='description'>" + data.articles[i].description + 
            "</p><br /><a href=" + data.articles[i].url + " target='blank'><button class='url'>Read more</a></button>";
        }

    })
    
    .catch(err => {
        alert("Sth went wrong");
    })
})