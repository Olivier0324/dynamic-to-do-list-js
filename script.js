document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // 1. Create new list item
        const listItem = document.createElement('li');

        // 2. Set its textContent to taskText
        listItem.textContent = taskText;

        // 3. Create remove button
        const removeButton = document.createElement('button');

        // 4. Set button text and class (using className instead of classList.add)
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // 5. Assign onclick event to remove button
        removeButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        // 6. Append remove button to li element
        listItem.appendChild(removeButton);

        // 7. Append li to taskList
        taskList.appendChild(listItem);

        // 8. Clear input field
        taskInput.value = '';
    }

    // Attach event listener to add button
    addButton.addEventListener('click', addTask);

    // Attach event listener for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});