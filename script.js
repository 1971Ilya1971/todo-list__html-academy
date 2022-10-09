let list = document.querySelector('.todo-list');
let input = document.querySelector('.todo-input');
let form = document.querySelector('.todo-form');
let priority = document.querySelector('.todo-priority');

priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
  input.focus();
};

form.onsubmit = function (evt) {
  evt.preventDefault();
  
  let newItem = document.createElement('li');
  if (priority.classList.contains('is-important')) {
   newItem.classList.add('is-important') 
  } 
  newItem.textContent = input.value;
  list.append(newItem);
  input.value ='';
  input.focus();
};
