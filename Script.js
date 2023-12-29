javascript
function addTask() {
  let taskInput = document.getElementById('taskInput');
  let taskList = document.getElementById('taskList');

  if (taskInput.value !== '') {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(li);
    taskInput.value = '';

    li.onclick = function() {
      this.parentNode.removeChild(this);
    };
  } else {
    alert('Please enter a task!');
  }
}