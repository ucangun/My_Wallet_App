const btnIncome = document.querySelector(".btn-income");
const amountIncome = document.getElementById("incomeAmount");
const descriptionIncome = document.getElementById("incomeDescription");
//*!
const btnExpense = document.querySelector(".btn-expense");
const amountExpense = document.getElementById("expenseAmount");
const descriptionExpense = document.getElementById("expenseDescription");

//*!

const movContainer = document.querySelector(".movements-container");
const movRow = document.querySelector(".movements-row");

//*!
const sumIn = document.querySelector(".total-in-value");
const sumOut = document.querySelector(".total-out-value");
const sumTotal = document.querySelector(".total-value");

//*!
let incomes = JSON.parse(localStorage.getItem("incomes")) || [];
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

//*!

const displayMovements = () => {
  movContainer.innerHTML = "";

  incomes.forEach((income) => {
    const movRow = document.createElement("div");
    movRow.className = "movements-row d-flex justify-content-around p-2";

    movRow.innerHTML = `
          <div class="movements-date">${new Date(
            income.id
          ).toLocaleDateString()}</div>
          <div class="movements--type movements--income">Income</div>
          <div class="movements-description">${income.description}</div>
          <div class="movements-amount">${income.amount} €</div>
          <div class="movements-trash"><i class="bi bi-trash-fill"></i> </div>
    `;
    movContainer.appendChild(movRow);
  });

  expenses.forEach((expense) => {
    const movRow = document.createElement("div");
    movRow.className = "movements-row d-flex justify-content-around p-2";

    movRow.innerHTML = `
          <div class="movements-date">${new Date(
            expense.id
          ).toLocaleDateString()}</div>
          <div class="movements--type movements--outcome">Expense</div>
          <div class="movements-description">${expense.description}</div>
          <div class="movements-amount"> ${-expense.amount} €</div>
          <div class="movements-trash"><i class="bi bi-trash-fill"></i> </div>

    `;
    movContainer.appendChild(movRow);
  });
};

const addIncome = () => {
  if (
    amountIncome.value !== "" &&
    amountIncome.value > 0 &&
    descriptionIncome.value !== ""
  ) {
    const newIncome = {
      description: descriptionIncome.value,
      amount: amountIncome.value,
      id: new Date().getTime(),
    };
    incomes.push(newIncome);
    localStorage.setItem("incomes", JSON.stringify(incomes));
    displayMovements();
    amountIncome.value = "";
    descriptionIncome.value = "";
  }
};

const addExpense = () => {
  if (
    amountExpense.value !== "" &&
    amountExpense.value > 0 &&
    descriptionExpense.value !== ""
  ) {
    const newExpense = {
      description: descriptionExpense.value,
      amount: -Math.abs(amountExpense.value),
      id: new Date().getTime(),
    };
    expenses.push(newExpense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayMovements();
    amountExpense.value = "";
    descriptionExpense.value = "";
  }
};

btnIncome.addEventListener("click", (e) => {
  e.preventDefault();
  addIncome();
  calculateTotal();
});

btnExpense.addEventListener("click", (e) => {
  e.preventDefault();
  addExpense();
  calculateTotal();
});

const calculateTotal = () => {
  const totalIncome = incomes.reduce(
    (sum, { amount }) => sum + Number(amount),
    0
  );
  const totalExpense = expenses.reduce(
    (sum, { amount }) => sum + Number(amount),
    0
  );
  const totalBalance = totalIncome - totalExpense; // Since expenses are negative

  sumIn.textContent = `${totalIncome.toFixed(2)} €`;
  sumOut.textContent = `- ${totalExpense.toFixed(2)} €`;
  sumTotal.textContent = `${totalBalance.toFixed(2)} €`;
};

displayMovements();
calculateTotal();
