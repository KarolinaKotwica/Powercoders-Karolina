/*
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
let newItemValue = document.getElementById('newItem');
let errorMessage = document.getElementById('error');

function Todo(id, text, isDone=false) {
    this.id = id;
    this.text = text;
    this.isDone = isDone;
}

const todos = [];

// trigger button click on enter
newItemValue.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addNewItemButton.click();
    }
  });


let isInputUnique = newItem => {
    //loop through the todos and compare each item to newItem
    //if one item is equal to newItem > return false
    //else > return true
    console.log(todos);
    if(todos.length != 0) {
        for(let i = 0; i < todos.length; i++) {
            // if element is the same like in array -> display error message
            if(newItem === todos[i].text) {
                errorMessage.textContent = "You have the same element in your to-do list.";
                errorMessage.style.visibility = 'visible';
                return false;
            } else {
                return true;
            }
        }
    } else {
        return true;
    }
    
}

function addTodo() {
    if(newItemValue.value != "" && isInputUnique(newItemValue.value)) {
        errorMessage.style.visibility = "hidden";
        let lengthOfTodos = todos.length;
        let item = new Todo(lengthOfTodos+1, newItemValue.value);
        // add item to the array
        todos.push(item);
        // call function which display the list
        displayList(todos);
        // set value of input of empty string
        newItemValue.value = '';
        
    } else {
        errorMessage.style.visibility = 'visible';
        errorMessage.textContent = "Input is empty or value is not unique.";
    }
}

let removeElement = id => {
    for(let i = 0; i < todos.length; i++) {
        if(todos[i].isDone) {
            //remove elements from array
            todos.splice(id, 1);
            //display new list
            displayList(todos);
        }
    }
}

let displayList = todos => {
    //we have to remove existing elements
    ulForm.innerHTML = "";

    // loop through the object and render in HTML
    for(let i = 0; i < todos.length; i++) {

        // create checkbox with label
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = i;
        let label = document.createElement('label');
 
        // create li
        let li = document.createElement('li');


        // add eventListener
 
        checkbox.addEventListener('click', id => {
            todos[i].isDone = true;
            removeElement(id);
        })

        label.textContent = todos[i].text;
        li.appendChild(checkbox);
        li.appendChild(label);
        
        //append li to ul
        ulForm.appendChild(li);
    }
}

displayList(todos);
addNewItemButton.addEventListener('click', addTodo);