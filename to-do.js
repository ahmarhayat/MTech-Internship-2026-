
const fs = require('fs');

const FILE_PATH = './todos.json';

// Change this variable to test different actions:
// 'add', 'list', or 'complete'
const action = 'add';

// Todo to add
const newTodo = {
    id: 1,
    task: 'Learn Node.js',
    completed: false
};

// Read todos from JSON file
function readTodos() {
    if (!fs.existsSync(FILE_PATH)) {
        return [];
    }

    const data = fs.readFileSync(FILE_PATH, 'utf8');

    if (!data.trim()) {
        return [];
    }

    return JSON.parse(data);
}

// Write todos to JSON file
function writeTodos(todos) {
    fs.writeFileSync(
        FILE_PATH,
        JSON.stringify(todos, null, 2),
        'utf8'
    );
}

// Add a todo
function addTodo() {
    const todos = readTodos();

    todos.push(newTodo);

    writeTodos(todos);

    console.log(`Todo added: "${newTodo.task}"`);
}

// List all todos
function listTodos() {
    const todos = readTodos();

    if (todos.length === 0) {
        console.log('No todos found.');
        return;
    }

    console.log('--- Todos ---');

    todos.forEach((todo) => {
        const status = todo.completed ? '[✓]' : '[ ]';
        console.log(`${status} ${todo.id}: ${todo.task}`);
    });
}

// Mark a todo as complete
function markComplete() {
    const todos = readTodos();

    const idToComplete = 1;

    const todo = todos.find((todo) => todo.id === idToComplete);

    if (!todo) {
        console.log(`Todo with ID ${idToComplete} not found.`);
        return;
    }

    todo.completed = true;

    writeTodos(todos);

    console.log(`Todo ${idToComplete} marked as complete.`);
}

// Perform selected action
if (action === 'add') {
    addTodo();
} else if (action === 'list') {
    listTodos();
} else if (action === 'complete') {
    markComplete();
} else {
    console.log('Invalid action.');
}

