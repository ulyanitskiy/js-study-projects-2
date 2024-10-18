'use strict';

(function () {
  const form = document.querySelector('[data-todo-form]');
  const todoItemsContainer = document.querySelector('#todoItems');
  const LOCAL_STORAGE_KEY = 'todoTasks';

  const loadTasksFromLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    tasks.forEach((task) => {
      const todoItemElement = createTodoItem(task);
      todoItemsContainer.prepend(todoItemElement);
    });
  };

  const saveTasksToLocalStorage = () => {
    const tasks = Array.from(todoItemsContainer.querySelectorAll('.taskWrapper')).map((taskElement) => ({
      title: taskElement.querySelector('.taskHeading').textContent,
      description: taskElement.querySelector('.taskDescription').textContent,
    }));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  };

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

    saveTasksToLocalStorage();

    event.target.reset();
    form.querySelector('button[type=submit]').setAttribute('disabled', '');
  };

  const inputHandler = () => {
    const formSubmitBtn = form.querySelector('button[type=submit]');
    const isFormValid = Array.from(form.querySelectorAll('input, textarea'))
      .every(({ value }) => value.trim().length > 0);

    formSubmitBtn.disabled = !isFormValid;
  };

  loadTasksFromLocalStorage();

  form.addEventListener('submit', submitHandler);
  form.addEventListener('input', inputHandler);
}());
