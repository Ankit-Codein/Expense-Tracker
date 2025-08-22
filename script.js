const totalBalanceEl = document.querySelector('.value');
const amountEL = document.querySelector('#amount')
const addTransactionEl = document.querySelector('.btn')
const selectEl = document.querySelector('select')
const totalIncomeEl = document.getElementById('income');
const totalExpenseEl = document.getElementById('expense');
// Title
const titleInput = document.getElementById('title');
// category
const categoryValue = document.getElementById('category')
const categorySpanBox = document.createElement('span')
categorySpanBox.className = "pill"

// Date
const inputDate = document.getElementById('date')


const transaction = {
    totalBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
}

function render() {
    totalBalanceEl.innerText = "₹ " + transaction.totalBalance;
    totalIncomeEl.innerText = "+₹ " + transaction.totalIncome;
    totalExpenseEl.innerText = "-₹ " + transaction.totalExpense;
}


addTransactionEl.addEventListener('click', () => {
    if (amountEL.value == "" || titleInput.value == "" || inputDate.value == "") {
        return alert("Fill in the blank")
        
    }
    if (selectEl.value == 'Income') {
        transaction.totalBalance += +amountEL.value;
        transaction.totalIncome += +amountEL.value;
        
        
    } else {
        transaction.totalBalance -= amountEL.value;
        transaction.totalExpense += +amountEL.value;
    }


    const tbody = document.querySelector('tbody')

    const td = `
        <td data-label="Title">${titleInput.value}</td>
        <td data-label="Category">${categoryValue.value}</td>
        <td class="Income ${selectEl.value == 'Income' ? 'income':'expense'} Expense Amount" data-label="Amount" >${"₹ " + amountEL.value}</td>
        <td data-label="Date">${inputDate.value}</td>
        <td data-label="Type">${selectEl.value}</td>
    `
    const tr = document.createElement('tr');
    tr.innerHTML = td;
    tr.id = 'tableBox'
    tbody.append(tr)

    render();
})
