// 1. Select DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// 2. Use Array to store tasks - ES6
let tasks = [];

// 3. Function to add a task
const addTask = () => {
    const taskText = taskInput.value.trim();
    
    if(taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create task object - ES6
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task); // Add to array
    taskInput.value = ''; // Clear input
    
    displayTasks(); // Update UI
}

// 4. Function to display tasks - DOM Manipulation
const displayTasks = () => {
    taskList.innerHTML = ''; // Clear list

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.classList.add('task-item');
        li.innerHTML = `
            <span>${task.text}</span>
            <button class="deleteBtn" onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// 5. Function to delete a task
const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id); // ES6 filter
    displayTasks();
}

// 6. Event Listeners
addBtn.addEventListener('click', addTask);

// Allow Enter key to add task
taskInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addTask();
    }
});

console.log("M-Tech JS Lab 2.4 Loaded Successfully");