'use strict';

(function () {
  const form = document.querySelector('[data-todo-form]');
  const todoItemsContainer = document.querySelector('#todoItems');

  const createTodoItem = ({ title, description }) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';

    wrapper.innerHTML = `
                <div class="taskWrapper">
                    <div class="taskHeading">${title}</div>
                    <div class="taskDescription">${description}</div>
                </div>`;

    return wrapper;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const inputs = event.target.querySelectorAll('input, textarea');
    const data = Array.from(inputs).reduce((acc, { name, value }) => {
      acc[name] = value.trim();
      return acc;
    }, {});

    if (Object.values(data).some((value) => !value)) return;

    const todoItemElement = createTodoItem(data);
    todoItemsContainer.prepend(todoItemElement);
    event.target.reset();
    form.querySelector('button[type=submit]').setAttribute('disabled', '');
  };

  const inputHandler = () => {
    const formSubmitBtn = form.querySelector('button[type=submit]');
    const isFormValid = Array.from(form.querySelectorAll('input, textarea'))
      .every(({ value }) => value.trim().length > 0);

    formSubmitBtn.disabled = !isFormValid;
  };

  form.addEventListener('submit', submitHandler);
  form.addEventListener('input', inputHandler);
}());
