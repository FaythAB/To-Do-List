function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.ariaValueMax.trim() !== ''){
        const li = document.createElement('li');
        li.innerHTML =`
        ${taskInput.value}
        <span class="remove-btn" onclick="removeTask(this)">Remove</span>`;
    }
}

function removeTask(element) {
    const taskList = document.getElementById('taskList');
    const li = element.parentElement;
    taskList.removeChild(li);
}

document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('taskList');

    addBtn.addEventListener('click', function () {
      const taskText = taskInput.value.trim();

      if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
          <span>${taskText}</span>
          <button class="remove-btn">Remove</button>
          <button class="edit-btn">Edit</button>
          <button class="complete-btn">Complete</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';

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
  //     }
  //   });
  // });