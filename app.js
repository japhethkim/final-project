async function addLoan() {
    const borrower = document.getElementById('borrower').value;
    const amount = document.getElementById('amount').value;
    const dueDate = document.getElementById('dueDate').value;

    const loan = { borrower, amount, dueDate };
    
    const response = await fetch('/addLoan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loan)
    });

    const result = await response.json();
    if (result.success) {
        displayLoans();
    } else {
        alert('Error adding loan');
    }
}

async function displayLoans() {
    const response = await fetch('/getLoans');
    const loans = await response.json();
    
    const loanList = document.getElementById('loanList');
    loanList.innerHTML = '';

    loans.forEach(loan => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${loan.borrower} borrowed $${loan.amount}, Due on ${loan.dueDate}`;
        loanList.appendChild(listItem);
    });
}

displayLoans();
