let projectData = {
    completedTasks: 20,
    totalTasks: 50,
    milestones: 5,
    expenses: 0, // Added expenses tracking
};

// Function to update project expenses
function updateProjectExpenses(amount) {
    projectData.expenses += amount;
    renderProjectOverviewChart();
}

function renderProjectOverviewChart() {
    const ctx = document.getElementById('projectOverviewChart').getContext('2d');
    const projectOverviewChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed Tasks', 'Remaining Tasks', 'Expenses'],
            datasets: [{
                label: 'Project Overview',
                data: [projectData.completedTasks, projectData.totalTasks - projectData.completedTasks, projectData.expenses],
                backgroundColor: ['#1d4598', '#fbd214', '#d0212a'], // Added color for expenses
            }]
        },
        options: {
            responsive: true,
        }
    });
}

// Event listener for adding expenses
document.getElementById('add-expense').addEventListener('click', function() {
    const expenseAmount = parseFloat(prompt('Enter the expense amount:'));
    if (!isNaN(expenseAmount) && expenseAmount > 0) {
        updateProjectExpenses(expenseAmount);
    } else {
        alert('Please enter a valid expense amount.');
    }
});

// Event listener for paying debt
document.getElementById('pay-debt').addEventListener('click', function() {
    if (remainingFunds < 0) {
        const payAmount = Math.abs(remainingFunds);
        alert(`Paying off debt of $${payAmount}`);
        remainingFunds = 0; // Reset remaining funds to zero
        updateBudgetBudDisplay(); // Update display
    } else {
        alert('No debt to pay off.');
    }
});

// Initial render of the project overview chart
renderProjectOverviewChart();
