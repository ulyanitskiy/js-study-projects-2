'use strict';

(function () {
  const form = document.querySelector('[data-todo-form]');
  const todoItemsContainer = document.querySelector('#todoItems');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target).entries());
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';
    wrapper.innerHTML = `
            <div class="taskWrapper">
                <div class="taskHeading">${data.title}</div>
                <div class="taskDescription">${data.description}</div>
            </div>`;

    todoItemsContainer.prepend(wrapper);
    event.target.reset();
  });
}());
