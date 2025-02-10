// Sample data for budget management
let totalBudget = 100000;
let remainingFunds = 100000;
let expenses = 0;

// Update budget display
function updateBudgetDisplay() {
    document.getElementById('total-budget').innerText = `$${totalBudget}`;
    document.getElementById('remaining-funds').innerText = `$${remainingFunds}`;
    document.getElementById('expenses').innerText = `$${expenses}`;
}

// Event listener for budget transfer button
document.getElementById('transfer-budget').addEventListener('click', function() {
    alert('Budget transfer functionality to be implemented.');
});

// Event listener for creating a task
document.getElementById('create-task').addEventListener('click', function() {
    alert('Task creation functionality to be implemented.');
});

// Initial display update
updateBudgetDisplay();
