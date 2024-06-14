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
  const createIncomeRow = (id, date, description, amount) => {
    const movRow = document.createElement("div");
    movRow.className = "movements-row d-flex justify-content-between p-2";
    const movDate = document.createElement("div");
    movDate.className = "movements--income";
    movDate.textContent = date;
    const movDescription = document.createElement("div");
    movDescription.textContent = description;
    const movAmount = document.createElement("div");
    movAmount.textContent = amount;
    const movTrash = document.createElement("i");
    movTrash.className = "bi bi-trash-fill movements-trash";
    movTrash.id = id;

    movRow.appendChild(movDate);
    movRow.appendChild(movDescription);
    movRow.appendChild(movAmount);
    movRow.appendChild(movTrash);

    return movRow;
  };

  incomes.forEach(({ id, date, description, amount }) => {
    const movRow = createIncomeRow(id, date, description, amount);
    movContainer.appendChild(movRow);
  });

  const createExpenseRow = (id, date, description, amount) => {
    const movRow = document.createElement("div");
    movRow.className = "movements-row d-flex justify-content-between p-2";
    const movDate = document.createElement("div");
    movDate.className = "movements--outcome";
    movDate.textContent = date;
    const movDescription = document.createElement("div");
    movDescription.textContent = description;
    const movAmount = document.createElement("div");
    movAmount.textContent = amount;
    const movTrash = document.createElement("i");
    movTrash.className = "bi bi-trash-fill movements-trash";
    movTrash.id = id;

    movRow.appendChild(movDate);
    movRow.appendChild(movDescription);
    movRow.appendChild(movAmount);
    movRow.appendChild(movTrash);

    return movRow;
  };

  expenses.forEach(({ id, date, description, amount }) => {
    const movRow = createExpenseRow(id, date, description, amount);
    movContainer.appendChild(movRow);
  });
};

const addIncome = () => {
  if (
    amountIncome.value !== "" &&
    amountIncome.value > 0 &&
    descriptionIncome.value !== ""
  ) {
    const id = new Date().getTime();
    const newIncome = {
      id: id,
      date: new Date(id).toLocaleDateString(),
      description: descriptionIncome.value,
      amount: amountIncome.value,
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
    const id = new Date().getTime();
    const newExpense = {
      id: id,
      date: new Date(id).toLocaleDateString(),
      description: descriptionExpense.value,
      amount: amountExpense.value,
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

    const id = Number(e.target.id);

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
  if (username.value !== "" && password.value !== "") {
    app.classList.remove("d-none");
    loginBox.classList.add("d-none");
    const welcomeText = document.createElement("p");
    welcome.appendChild(welcomeText);
    welcomeText.className = "welcome-text";
    welcomeText.textContent = `Welcome ${username.value}`;
  }
});
