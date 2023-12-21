document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('taskInput');
  const addBtn = document.getElementById('add-btn');
  const taskList = document.getElementById('taskList');

  function createTaskItem(taskText) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="remove-btn">Remove</button>
      <button class="edit-btn">Edit</button>
      <button class="complete-btn">Complete</button>
    `;

    const removeBtn = taskItem.querySelector('.remove-btn');
    const editBtn = taskItem.querySelector('.edit-btn');
    const completeBtn = taskItem.querySelector('.complete-btn');

    removeBtn.addEventListener('click', function () {
      taskList.removeChild(taskItem);
    });

    editBtn.addEventListener('click', function () {
      const newText = prompt('Edit task:', taskText);
      if (newText !== null) {
        taskItem.querySelector('span').innerText = newText;
      }
    });

    completeBtn.addEventListener('click', function () {
      taskItem.classList.toggle('completed');
    });

    return taskItem;
  }

  addBtn.addEventListener('click', function () {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      const taskItem = createTaskItem(taskText);
      taskList.appendChild(taskItem);
      taskInput.value = '';
    }
  });
});