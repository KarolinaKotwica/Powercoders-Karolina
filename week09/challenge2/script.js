let cities2 = document.getElementById('cities');
let button = document.querySelector('button');
let output = document.getElementById('output');
let image = document.getElementById('image');
let error = document.getElementById('errorMessage');
let desc = document.getElementById('description');

button.addEventListener('click', (e) => {
    e.preventDefault();
    let cities = cities2.value;
    // fetch
    // 1. returns a promise: I promise to let you know when the response
    // of my request is returned
    // 2. then it returns a response: with its own method json() to
    // parse the response
    // 3. then it returns a object: with the data of your AJAX call


    output.innerText = '';
    desc.innerText = '';
    error.innerText = '';

    // Fetch API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cities}&units=metric&appid=ed7a9b706ac17d6ed8df62a13b9b9013`)
    .then(response => response.json())
    .then(data => {
        let nameValue = data['name'];
        let temp = data['main']['temp'];
        let description = data.weather[0].description;
        let imageCode = data.weather[0].icon;
        let urlImage = `http://openweathermap.org/img/wn/${imageCode}@2x.png`

        // Display output
        output.textContent = `In ${nameValue} is ${temp} °C now`;
        // Display weather image
        image.src = urlImage;
        // Display description 
        desc.textContent = description;
    })
    
    .catch(err => {
        error.textContent = "Something went wrong, please try again!";
    })
})
    


