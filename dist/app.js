"use strict";
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');
const expenses = [];
expenseForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const expenseName = expenseNameInput.value;
    const expenseAmount = parseFloat(expenseAmountInput.value);
    if (expenseName === '' || isNaN(expenseAmount)) {
        alert('Please enter a name and a valid amount.');
        return;
    }
    const expense = {
        name: expenseName,
        amount: expenseAmount,
    };
    expenses.push(expense);
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
    displayExpenses();
});
const displayExpenses = () => {
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${expense.name}</span>
            <span>$${expense.amount.toFixed(2)}</span>
            <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(listItem);
    });
};
const deleteExpense = (index) => {
    expenses.splice(index, 1);
    displayExpenses();
};
