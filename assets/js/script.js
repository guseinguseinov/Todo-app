'use strict';

let themeButton = document.querySelector('.theme-btn');
let themeButtonImage = document.querySelector('.theme-icon');
let userForm = document.querySelector('.user-form');
let userList = document.querySelector('.list');
let allList = [];
let activeList = [];
let completedList = [];

// dark mode handler 
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


userForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let {checkbox, text} = userForm.elements;
    if (text.value.length === 0) {
        alert('Please, enter something.');
    }
    else {
        let newItem = `
        <div class="list-item">
            <div class="list-container">
                <input class="list-item-checkbox" type="checkbox" >
                <p class="text">${text.value}</p>
            </div>

            <button class="delete" type="button">
                <img src="./assets/images/icon-cross.svg" aria-label="delete">
            </button>
        </div>`

        userList.insertAdjacentHTML('afterbegin', newItem);
        text.value = '';
        document.querySelector('.list-item-checkbox').addEventListener('click', checkCompleted); 
        document.querySelector('.delete').addEventListener('click', deleteITem);
        if (checkbox.checked) {
            document.querySelector('.list-item-checkbox').checked = true;
            document.querySelector('.text').classList.add('line-through');
        }
    }
    
});

function checkCompleted() {
    let text = this.parentElement.children[1];
    if (this.checked) {
        text.classList.add('line-through');
    }else {
        text.classList.remove('line-through');
    }
}

function deleteITem() {
    this.parentElement.remove();
}


