/**
 * 
 * find the node
 * store in a variable
 * manipulate
 */

let paragraph = document.querySelector('#changeMe');
let new_text = 'The text was magically changed.';

paragraph.innerText = new_text;
paragraph.textContent = '... and gone.';

let list = document.querySelectorAll('li');
/*list.forEach((li,index)=>{
    li.innerText = index+1;
})*/

for(let li of list){
    //li.innerText = li.innerText.substring(5);
    li.innerText = li.innerText.replace('item ','');
}