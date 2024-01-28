const form = document.querySelector("#form");
const email = document.querySelector("#email");
const date = document.querySelector("#date");
const password = document.querySelector("#password");

//Handle Ui
class UI {
  static isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  static validateInputs() {
    const emailValue = email?.value.trim();
    const passwordValue = password?.value.trim();
    const date2Value = date.value?.trim();

    if (emailValue === "") {
      UI.setError(email, "Email is required");
    } else if (!UI.isValidEmail(emailValue)) {
      UI.setError(email, "Provide a valid email address");
    } else {
      UI.setSuccess(email);
    }

    if (passwordValue === "") {
      UI.setError(password, "Password is required");
    } else if (passwordValue.length < 8) {
      UI.setError(password, "Password must be at least 8 character.");
    } else {
      UI.setSuccess(password);
    }

    if (date2Value === "") {
      UI.setError(date, "Date is required");
    } else if (date2Value < 0 || date2Value > 31) {
      UI.setError(date2Value, "Please enter a valid date");
    } else {
      UI.setSuccess(date2Value);
    }
  }

  static setError(element, message) {
    console.log(element.parentElement);
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
  }
  static setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };
}

//Submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("im running");
  UI.validateInputs();
});
