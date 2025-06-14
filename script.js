document.addEventListener('DOMContentLoaded', function () {
    // DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks array
    let tasks = [];

    // Load tasks from localStorage on startup
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            renderTasks();
        }
    }

    // Render all tasks to the DOM
    function renderTasks() {
        // Clear existing tasks
        taskList.innerHTML = '';

        // Add each task to the DOM
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = task;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';
            removeButton.onclick = () => removeTask(index);

            listItem.appendChild(removeButton);
            taskList.appendChild(listItem);
        });
    }

    // Add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (!taskText) {
            alert('Please enter a task!');
            return;
        }

        tasks.push(taskText);
        saveTasks();
        renderTasks();
        taskInput.value = '';
    }

    // Remove a task by index
    function removeTask(index) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }

    // Save tasks to localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Initial load
    loadTasks();
});