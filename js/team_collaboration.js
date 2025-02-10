let comments = [];

// Function to display comments
function displayComments() {
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = '';
    comments.forEach((comment, index) => {
        const commentItem = document.createElement('div');
        commentItem.innerText = comment;
        commentList.appendChild(commentItem);
    });
}

// Event listener for adding a comment
document.getElementById('add-comment').addEventListener('click', function() {
    const newComment = document.getElementById('new-comment').value;
    if (newComment) {
        comments.push(newComment);
        displayComments();
        document.getElementById('new-comment').value = ''; // Clear the input
    } else {
        alert('Please enter a comment.');
    }
});

// Event listener for transferring budget
document.getElementById('transfer-budget').addEventListener('click', function() {
    const transferAmount = parseFloat(prompt('Enter the amount to transfer:'));
    if (!isNaN(transferAmount) && transferAmount > 0) {
        alert(`Transferred $${transferAmount}`);
    } else {
        alert('Please enter a valid amount.');
    }
});

displayComments();
