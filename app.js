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

const app = document.querySelector(".app");

//*!
let incomes = JSON.parse(localStorage.getItem("incomes")) || [];
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

//*!

const displayMovements = () => {
  movContainer.innerHTML = "";

  incomes.forEach((income) => {
    const movRow = document.createElement("div");
    movRow.className = "movements-row d-flex justify-content-around p-2";
    movRow.setAttribute("data-id", income.id);

    movRow.innerHTML = `
          <div class="movements-date">${new Date(
            income.id
          ).toLocaleDateString()}</div>
          <div class="movements--type movements--income">Income</div>
          <div class="movements-description">${income.description}</div>
          <div class="movements-amount">${income.amount} €</div>
          <i class="bi bi-trash-fill movements-trash"></i> 
    `;
    movContainer.appendChild(movRow);
  });

  expenses.forEach((expense) => {
    const movRow = document.createElement("div");
    movRow.className = "movements-row d-flex justify-content-around p-2";
    movRow.setAttribute("data-id", expense.id);

    movRow.innerHTML = `
          <div class="movements-date">${new Date(
            expense.id
          ).toLocaleDateString()}</div>
          <div class="movements--type movements--outcome">Expense</div>
          <div class="movements-description">${expense.description}</div>
          <div class="movements-amount"> ${-expense.amount} €</div>
          <i class="bi bi-trash-fill movements-trash"></i> 

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
  sumOut.textContent = ` ${totalExpense.toFixed(2)} €`;
  sumTotal.textContent = `${totalBalance.toFixed(2)} €`;
};

displayMovements();
calculateTotal();

movContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("movements-trash")) {
    const movRow = e.target.closest(".movements-row");

    const id = Number(movRow.getAttribute("data-id"));

    // Remove from incomes or expenses arrays
    incomes = incomes.filter((income) => income.id !== id);
    expenses = expenses.filter((expense) => expense.id !== id);

    // Update localStorage
    localStorage.setItem("incomes", JSON.stringify(incomes));
    localStorage.setItem("expenses", JSON.stringify(expenses));

    // Update UI
    displayMovements();
    calculateTotal();
  }
});

//*! Login Function

const username = document.getElementById("inputUserName");
const password = document.getElementById("inputPassword");
const btnLogin = document.querySelector(".btn-login");
const loginBox = document.querySelector(".login-box");
const welcome = document.querySelector(".welcome");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (username !== "" && password !== "") {
    app.classList.remove("d-none");
    loginBox.classList.add("d-none");
    const welcomeText = document.createElement("p");
    welcome.appendChild(welcomeText);
    welcomeText.className = "welcome-text";
    welcomeText.textContent = `Welcome ${username.value}`;
  }
});
