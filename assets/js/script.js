'use strict';

const themeButton = document.querySelector('.theme-btn');
const themeButtonImage = document.querySelector('.theme-icon');
const userForm = document.querySelector('.user-form');
const userList = document.querySelector('.list');
const checkBoxList = document.querySelectorAll('.list-item-checkbox');


checkBoxList.forEach( function(element) {
    element.addEventListener('click', function(e){
        console.log(e);
    })    
})


themeButton.addEventListener('click', function(){
    
    if (document.documentElement.dataset.theme === 'dark') {
        document.documentElement.dataset.theme = 'light';  
        themeButtonImage.src = 'assets/images/icon-moon.svg';
    }
    else {
        document.documentElement.dataset.theme = 'dark';  
        themeButtonImage.src = 'assets/images/icon-sun.svg';
    }
}); 


// document.addEventListener('keyup', function(e) {
//     userForm.preventDefault();
//     if (e.key === 'Enter'){
//         console.log('ok');
//     }
// });

function check(checkInput, text) {
    
}




userForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const  [ischecked, listItem]= userForm.elements;
    let newItem = `
    <div class="list-item">
        <div class="list-container">
            <input class="list-item-checkbox" type="checkbox" >
            <p class="text">${listItem.value}</p>
        </div>

        <button class="delete" type="button">
            <img src="./assets/images/icon-cross.svg" aria-label="delete">
        </button>
    </div>`

    userList.insertAdjacentHTML('afterbegin', newItem);
    [checkBoxList].push(ischecked);
    if (ischecked.checked == true) {
        document.querySelector('.list-item-checkbox').checked = true;
        document.querySelector('.text').classList.add('line-through');
    }
});