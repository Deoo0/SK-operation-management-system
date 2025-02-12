let tasks = [];

// Function to change task status
function changeTaskStatus(index, newStatus) {
    if (tasks[index]) {
        tasks[index].status = newStatus;
        displayTasks();
    }
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('task-list-manage');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.innerText = `${task.name} - ${task.status}`;
        
        const statusButton = document.createElement('button');
        statusButton.innerText = 'Change Status';
        statusButton.addEventListener('click', () => {
            const newStatus = prompt('Enter new status (Pending, In Progress, Completed):');
            changeTaskStatus(index, newStatus);
        });
        
        taskItem.appendChild(statusButton);
        taskList.appendChild(taskItem);
    });
}

// Event listener for creating a task
document.getElementById('create-task-manage').addEventListener('click', function() {
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskDueDate = document.getElementById('task-due-date').value;
    const taskBudget = parseFloat(prompt('Enter budget for the task:'));
    
    if (taskName && taskBudget > 0) {
        tasks.push({ name: taskName, description: taskDescription, priority: taskPriority, dueDate: taskDueDate, status: 'Pending', budget: taskBudget });
        updateBudgetOnTaskCreation(taskBudget); // Deduct from budget
        displayTasks();
    } else {
        alert('Please enter a valid task name and budget.');
    }
});

displayTasks();
