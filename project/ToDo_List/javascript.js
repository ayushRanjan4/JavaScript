const task = document.querySelector('#taskInput');
const add = document.querySelector('#addTask');
const list = document.querySelector('#taskList');

add.addEventListener('click', () => {

    if(task.value === ""){
        alert("Enter a task");
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = `
        <span>${task.value}</span>
        <span class="remove">❌</span>
    `;

    list.appendChild(li);

    task.value = "";

    const removeBtn = li.querySelector('.remove');

    removeBtn.addEventListener('click', () => {
        li.remove();
    });

});