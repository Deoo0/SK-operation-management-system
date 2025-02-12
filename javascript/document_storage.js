let documents = [];

// Function to display documents
function displayDocuments() {
    const documentList = document.getElementById('document-list');
    documentList.innerHTML = '';
    documents.forEach((doc, index) => {
        const docItem = document.createElement('div');
        docItem.innerText = doc.name;
        documentList.appendChild(docItem);
    });
}

// Event listener for uploading a document
document.getElementById('upload-document-doc').addEventListener('click', function() {
    const fileInput = document.getElementById('upload-file-doc');
    const file = fileInput.files[0];
    if (file) {
        documents.push({ name: file.name });
        displayDocuments();
        fileInput.value = ''; // Clear the input
    } else {
        alert('Please select a file to upload.');
    }
});

// Event listener for adding an expense
document.getElementById('add-expense-doc').addEventListener('click', function() {
    const expenseAmount = parseFloat(prompt('Enter the expense amount:'));
    if (!isNaN(expenseAmount) && expenseAmount > 0) {
        alert(`Added expense of $${expenseAmount}`);
    } else {
        alert('Please enter a valid expense amount.');
    }
});

displayDocuments();
