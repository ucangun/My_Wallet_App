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
const movDate = document.querySelector(".movements-date");
const movType = document.querySelector(".movements-type");
const movDescription = document.querySelector(".movements-description");
const movAmount = document.querySelector(".movements-amount");

const createIncomeRow = () => {
  const movRow = document.createElement("div");
  movRow.className = "movements-row d-flex justify-content-around p-2";

  movRow.innerHTML = `
        <div class="movements-date">${`${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}`}</div>
        <div class="movements--type movements--income"> Income
        </div>
        <div class="movements-description">${descriptionIncome.value}</div>
        <div class="movements-amount">${amountIncome.value} €</div>
  `;

  movContainer.appendChild(movRow);
};

const createExpenseRow = () => {
  const movRow = document.createElement("div");
  movRow.className = "movements-row d-flex justify-content-around p-2";

  movRow.innerHTML = `
        <div class="movements-date">${`${new Date().getDay()}.${
          new Date().getMonth() + 1
        }.${new Date().getFullYear()}`}</div>
        <div class="movements--type movements--outcome"> Expense
        </div>
        <div class="movements-description">${descriptionExpense.value}</div>
        <div class="movements-amount">${amountExpense.value} €</div>
  `;

  movContainer.appendChild(movRow);
};

btnIncome.addEventListener("click", (e) => {
  e.preventDefault();
  if (amountIncome.value !== "" && descriptionIncome.value !== "") {
    createIncomeRow();
    amountIncome.value = "";
    descriptionIncome.value = "";
  }
});

btnExpense.addEventListener("click", (e) => {
  e.preventDefault();
  if (amountExpense.value !== "" && descriptionExpense.value !== "") {
    createExpenseRow();
    amountExpense.value = "";
    descriptionExpense.value = "";
  }
});
