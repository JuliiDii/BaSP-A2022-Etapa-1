window.onload = function() {
    var signInErrors = {
        password: 'Required',
        email: 'Required'
    };
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var signInButton = document.getElementById("button");

    emailInput.onblur = function() {
        var inputValue = emailInput.value;
        if (!emailExpression.test(inputValue)) { // if (emailExpression.test(inputValue) === false)
            var p = document.createElement("p");
            signInErrors.email = errorMessage;
            p.innerHTML = "Invalid email format";
            var errorMessage = p.innerHTML;
            p.classList.add("font-red");
            emailInput.classList.add('redBorder');
            var errorMessageElement = document.createElement('p');
            errorMessageElement.setAttribute('id', 'emailError');
            errorMessageElement.innerText = errorMessage;
            emailInput.insertAdjacentElement('afterend', errorMessageElement);
        } else {
            signInErrors.email = null;
            emailInput.classList.add('greenBorder');
        }
    }

    emailInput.onfocus = function() {
        emailInput.classList.remove('greenBorder');
        emailInput.classList.remove('redBorder');
        var emailError = document.getElementById('emailError');
        if (emailError) {
            emailError.remove();
        }
    }

    passwordInput.onblur = function() {
        var inputValue = passwordInput.value;
        if (inputValue === "") { // if (!inputValue)
            var errorMessage = "Password input is required";
            signInErrors.password = errorMessage;
            passwordInput.classList.add('redBorder');
            var errorMessageElement = document.createElement('p');
            errorMessageElement.setAttribute('id', 'passwordError');
            errorMessage.classList.add("font-red");
            errorMessageElement.innerText = errorMessage;
            passwordInput.insertAdjacentElement('afterend', errorMessageElement);
        } else {
            signInErrors.password = null;
            passwordInput.classList.add('greenBorder');
        }
    }

    passwordInput.onfocus = function() {
        passwordInput.classList.remove('greenBorder');
        passwordInput.classList.remove('redBorder');
        var passwordError = document.getElementById('passwordError');
        if (passwordError) {
            passwordError.remove();
        }
    }

    signInButton.onclick = function(event) {
        event.preventDefault();
        var errors = Object.values(signInErrors);
        var currentErrors = errors.filter(error => error !== null); // Me va a devolver todos los errores
        if (currentErrors.length > 0) {
            alert('Existen errores en el formulario');
        } else {
            var alertMessage = "Input values: " + passwordInput.value + " " + emailInput.value;
            alert(alertMessage);
        }
    }
}