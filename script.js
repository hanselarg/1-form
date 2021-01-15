// bugs
// 2- No aparece el mensaje de error debajo de cada campo cuando estan en rojo - Chequear archivo CSS para ver la solucion
// 3- No valida bien el email o al menos no muestra el mensaje de error email invalido - Este problema se solucionó arreglando el punto 2 nomas, habia quedado una linea de mas  display hidden que ocultaba los mensajes de error
// selecciona los elementos del html y los almacena en una variable usando el id que tienen en el html
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Show succes outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check email is valid
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (password2.value === "") {
    showError(password2, "Password 2 is required");
  } else {
    showSuccess(password2);
  }
});

// form.addEventListener("click", () => {
//   alert("Gracias por clickear");
// });

// form.addEventListener("mouseover", () => {
//   form.style.backgroundColor = "red";
//   form.style.width = "100px";
// });

// form.addEventListener("mouseleave", () => {
//   form.style.backgroundColor = "green";
//   form.style.width = "400px";
// });
