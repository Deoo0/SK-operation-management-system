
// Sample data for budget management
let totalBudgetDetail = 100000;
let remainingFundsDetail = 100000;
let expensesDetail = 0;

// Update budget display
function updateBudgetDetailDisplay() {
    document.getElementById('total-budget-detail').innerText = `$${totalBudgetDetail}`;
    document.getElementById('remaining-funds-detail').innerText = `$${remainingFundsDetail}`;
    document.getElementById('expenses-detail').innerText = `$${expensesDetail}`;
}

// Event listener for updating budget
document.getElementById('update-budget').addEventListener('click', function() {
    alert('Budget update functionality to be implemented.');
});

// Event listener for creating a task
document.getElementById('create-task-detail').addEventListener('click', function() {
    alert('Task creation functionality to be implemented.');
});

// Event listener for uploading a document
document.getElementById('upload-document').addEventListener('click', function() {
    alert('Document upload functionality to be implemented.');
});

// Function to render budget chart
function renderBudgetChart() {
    const ctx = document.getElementById('budgetChart').getContext('2d');
    const budgetChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Total Budget', 'Remaining Funds', 'Expenses'],
            datasets: [{
                label: 'Budget Overview',
                data: [totalBudgetDetail, remainingFundsDetail, expensesDetail],
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
updateBudgetDetailDisplay();
renderBudgetChart();
