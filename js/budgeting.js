let totalBudgetBud = 100000;
let remainingFundsBud = 100000;
let expensesBud = 0;

// Function to update budget when a task/project is created
function updateBudgetOnTaskCreation(taskBudget) {
    remainingFundsBud -= taskBudget;
    expensesBud += taskBudget;
    updateBudgetBudDisplay();
}

// Function to add an expense
function addExpense(amount) {
    expensesBud += amount;
    remainingFundsBud -= amount;
    updateBudgetBudDisplay();
}

// Update budget display
function updateBudgetBudDisplay() {
    document.getElementById('total-budget-bud').innerText = `$${totalBudgetBud}`;
    document.getElementById('remaining-funds-bud').innerText = `$${remainingFundsBud}`;
    document.getElementById('expenses-bud').innerText = `$${expensesBud}`;
}

document.getElementById('update-budget-bud').addEventListener('click', function() {
    const newTotalBudget = parseFloat(prompt('Enter the new total budget:'));
    if (!isNaN(newTotalBudget) && newTotalBudget > 0) {
        totalBudgetBud = newTotalBudget; // Update total budget
        updateBudgetBudDisplay();
    } else {
        alert('Please enter a valid budget amount.');
    }
});

// Event listener for adding an expense
document.getElementById('add-expense').addEventListener('click', function() {
    const expenseAmount = parseFloat(prompt('Enter the expense amount:'));
    if (!isNaN(expenseAmount) && expenseAmount > 0) {
        addExpense(expenseAmount);
    } else {
        alert('Please enter a valid expense amount.');
    }
});

// Function to render budget chart
function renderBudgetChartBud() {
    const ctx = document.getElementById('budgetChartBud').getContext('2d');
    const budgetChartBud = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Total Budget', 'Remaining Funds', 'Expenses'],
            datasets: [{
                label: 'Budget Overview',
                data: [totalBudgetBud, remainingFundsBud, expensesBud],
                backgroundColor: ['#d0212a', '#fbd214', '#1d4598'],
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initial display update
updateBudgetBudDisplay();
renderBudgetChartBud();
