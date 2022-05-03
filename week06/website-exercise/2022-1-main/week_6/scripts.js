/** declare list of authors based on img names // link / path for the link / alt text f.e. potrait for  */
let authors = [
    {
        firstName: "Andreas",
        lastName: "Neeser"
    },
    {
        firstName: "Anna",
        lastName: "Ruchat"
    },
    {
        firstName: "Arno",
        lastName: "Camenisch"
    },
    {
        firstName: "Barbara",
        lastName: "Schibli"
    },
    {
        firstName: "Demian",
        lastName: "Leinhard"
    },
    {
        firstName: "Flurina",
        lastName: "Bader"
    },
    {
        firstName: "Franco",
        lastName: "Supino"
    },
    {
        firstName: "Lukas",
        lastName: "Hartmann"
    },
    {
        firstName: "Marius_Daniel",
        lastName: "Popescu"
    },
    {
        firstName: "Reto",
        lastName: "Haenny"
    },
    {
        firstName: "Sandra",
        lastName: "kuenzi"
    },
    {
        firstName: "Simon",
        lastName: "Libsig"
    },
]

let Author = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.imgUrl = `img/tile_${firstName.toLowerCase()}_${lastName.toLowerCase()}.jpg`;
    this.altText = `Portrait of ${firstName} ${lastName}`;
    this.link = `authors/${firstName.toLowerCase()}-${lastName.toLowerCase()}.html`;
}


/** create object per author // onject in array
 * 
 */

/** create function createTiles to create masonry tiles
 * 
 * <li>
                <a href="authors/andreas-neeser.html">
                    <img src="img/tile_andreas_neeser.jpg" alt="">
                    <h2>Andreas Nesser</h2>
                </a>
            </li>
 */

function createTiles(authors){
    let tileList = [];
    authors.forEach(author => {
        const currentAuthor = new Author(author.firstName, author.lastName);
        const liTag = document.createElement('li');
        const aTag = document.createElement('a');
        const imgTag = document.createElement('img');
        const h2Tag = document.createElement('h2');
        const spanTag = document.createElement('span');
            
        aTag.href = currentAuthor.link;
        imgTag.src = currentAuthor.imgUrl;
        imgTag.alt = currentAuthor.altText;
        spanTag.textContent = currentAuthor.firstName + ' ' + currentAuthor.lastName;

            
        liTag.appendChild(aTag);
        aTag.appendChild(imgTag);
        aTag.appendChild(h2Tag);
        h2Tag.appendChild(spanTag);
            
        tileList.push(liTag);
    });
    return tileList;
}
/** create function addTiles to add all tiles to the DOM randomly */

function addTiles(list){
    const ulTag = document.querySelector('main ul');
    /** randomize list first */
    list = randomize(list);
    list.forEach(li => ulTag.appendChild(li));
}

// tempList
function randomize(list){
    let randomNumber = 0;
    let tempList = [];
    list.forEach(item => {
        do {
            randomNumber = Math.floor(Math.random() * (list.length));
        } while(tempList[randomNumber] !== undefined)

        tempList[randomNumber]= item;
    });
    return tempList;
}

addTiles(createTiles(authors));


/** add a eventListener on the logo to rebuild the list on click */

let logo = document.getElementById('imageLogo');
logo.addEventListener('click', reload, false)