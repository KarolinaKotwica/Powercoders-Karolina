// title
// list of to do 
// posibility to add new items 
// change order / set priorituty to - do
// // change status of to do list (open / done in progress)
// <li class="item">
// <input type="checkbox" name="todo1" id="todo1">
// <label for="todo1">Item1</label>
// </li>

/*
    array todos = array of objects


OUTPUT: array of todo rendered as list item

    add todo
        enter input
        submit input
        validate input (if is empty, does exact string exist as a open todo (repetition)) -> return error message
        enter input again -> valid: move to the next step


        create object with input string, number ( default add to the bottom of the list ) boolean (isDOne: false)
        add to the list (push it to the array)
        confirmation for user

    display list
    mark as a done
    order - set priority
    event listener for button
*/


let addNewItemButton = document.getElementById('addItem');
let ulForm = document.querySelector('.form');


function Todo(id, text, isDone=false) {
    this.id = id;
    this.text = text;
    this.isDone = isDone;
}

const todos = [];

function isInputUnique() {
    // return tru or false
    // loop through the todos and compare each newItem
    // if is unique -> return true else return false

    return true;
}

function addTodo() {
    let newItemValue = document.getElementById('newItem').value;

    if(newItemValue != "" && isInputUnique(newItemValue)) {
        let lengthOfTodos = todos.length;
        let item = new Todo(lengthOfTodos+1, newItemValue);
        todos.push(item);
        displayList(todos);

        // console log results
        console.log(item);
        console.log(todos);
    } else {
        console.log("Input is empty or value is not unique.");
    }
}

let displayList = todos => {
    //we have to remove existing elements
    //clearList();

    let listItems = document.querySelectorAll('input[type="checkbox"]');

    // add eventListener

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            todos.isDone ? false : true;
        })
    })

    // create checkbox with label
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    let label = document.createElement('label');
    // loop through the object and render in HTML
    for(let i = 0; i < todos.length; i++) {
        // create li
        let li = document.createComment('li');
        li.textContent = todos.text;
        //append li to ul
        ulForm.appendChild(li);
        // li.appendChild(checkbox);
        // li.appendChild(label);
    }
}

let changeStatus = () => {
    // check if input is checked
    // set property isDone = true
    // if is -> check id -> remove item
    // if not..
}

displayList(todos);
addNewItemButton.addEventListener('click', addTodo);