let search2 = document.getElementById('search');
let button = document.getElementById('button');
let output = document.getElementById('output');
let image = document.getElementById('image');
let radios = document.getElementsByName('sort');
let radioValue = '';


button.addEventListener('click', (e) => {
    e.preventDefault();
    let search = search2.value;

    // Find previous month and day
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    if(month < 10) {
        month = '0'+ month;
    }

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          // assign value from input type radio to the variable
          radioValue = radios[i].value;
      
          // only one radio can be logically checked, don't check the rest
          break;
        }
    }

    output.innerText = '';

    fetch(`https://newsapi.org/v2/everything?q=${search}&from=2022-${month}-${day}&sortBy=${radioValue}&apiKey=22e26f00695c42d19f5c20df4b5baaac`)
    .then(response => response.json())
    .then(data => {

        
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