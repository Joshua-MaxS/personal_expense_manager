const expenseForm = document.getElementById('expense-form') as HTMLFormElement;

const expenseNameInput = document.getElementById(
	'expense-name',
) as HTMLInputElement;

const expenseAmountInput = document.getElementById(
	'expense-amount',
) as HTMLInputElement;

const expenseList = document.getElementById('expense-list') as HTMLUListElement;

interface Expense {
	name: string;
	amount: number;
}

const expenses: Expense[] = [];

expenseForm.addEventListener('submit', function (e: Event) {
	e.preventDefault();

	const expenseName = expenseNameInput.value;
	const expenseAmount = parseFloat(expenseAmountInput.value);

	if (expenseName === '' || isNaN(expenseAmount)) {
		alert('Please enter a name and a valid amount.');
		return;
	}

	const expense: Expense = {
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

const deleteExpense = (index: number) => {
	expenses.splice(index, 1);
	displayExpenses();
};
