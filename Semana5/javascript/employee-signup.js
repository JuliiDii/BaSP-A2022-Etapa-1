window.onload = function() {
    var signUpErrors = {
        name :'Required',
        surname :'Required',
        dni : 'Required',
        dateofbirth : 'Required',
        phone :'Required',
        address : 'Required',
        locality : 'Required',
        postcode :'Required',
        email : 'Required',
        password : 'Required',
    };
    var nameInput = document.getElementById ("name");
    var surnameInput = document.getElementById("surname");
    var dniInput = document.getElementById("dni");
    var dateOfBirthInput  = document.getElementById("dateofbirth");
    var phoneInput = document.getElementById ("phone");
    var addressInput = document.getElementById("address");
    var localityInput = document.getElementById("locality");
    var postCodeInput = document.getElementById("postcode");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var nameContainer = document.getElementById("nameContainer");
    var surnameContainer = document.getElementById("nameContainer");
    var dniContainer = document.getElementById("nameContainer"); 
    var dateofbirthContainer = document.getElementById("nameContainer");
    var phoneContainer = document.getElementById("nameContainer");
    var addressContainer = document.getElementById("nameContainer");
    var localityContainer = document.getElementById("nameContainer");
    var postcodeContainer = document.getElementById("nameContainer");
    var emailContainer = document.getElementById("nameContainer");
    var passwordContainer = document.getElementById("nameContainer");
    var repearPasswordContainer = document.getElementById("nameContainer");

    var inputValue = nameInput.value;
    var InputValue = surnameInput.value;
    var InputValue = passwordInput.value;
    var InputValue = emailInput.value;
    var InputValue = dniInput.value;
    var InputValue = dateOfBirthInput.value;
    var InputValue = phoneInput.value;
    var InputValue = addressInput.value;
    var InputValue = localityInput.value;
    var InputValue = postCodeInput.value;
    var InputValue = emailInput.value;
    var InputValue = passwordInput.value;

    nameInput.onblur = function() {
        if (nameInput.value === "" || nameInput.value.length <= 3){
            var errorMessageElement = document.createElement('p');
            errorMessageElement.innerText= "Invalid name format";
            errorMessageElement.classList.add("font-red");
            nameContainer.append(errorMessageElement);
            errorMessageElement.setAttribute('id', 'nameError');

        } else {
            signUpErrors.name = null;
            nameInput.classList.add("greenBorder");
        }

    }
    nameInput.onfocus = function() {
        nameInput.classList.remove("greenBorder");
        var nameError = document.getElementById('nameError');
        if (nameError) {
            nameError.remove();
        }
    }
    surnameInput.onblur = function() {
        if (surnameInput.value === "" || surnameInput.value.length <= 3){
            var errorMessageElement2 = document.createElement('p');
            errorMessageElement2.innerText= "Invalid surname format";
            errorMessageElement2.classList.add("font-red");
            surnameContainer.append(errorMessageElement2);
            errorMessageElement2.setAttribute('id', 'surnameError');

        } else {
            signUpErrors.surname = null;
            surnameInput.classList.add("greenBorder");
        }
    }
    surnameInput.onfocus = function() {
        surnameInput.classList.remove("greenBorder");
        var surnameError = document.getElementById('surnameError');
        if (surnameError) {
            surnameError.remove();
        }
    }
    var dnicheck = /[0-9]{7,}$/;
    dniInput.onblur = function() {
        if (!dnicheck.test(inputValue)){
            var errorMessageElement3 = document.createElement('p');
            errorMessageElement3.innerText= "Invalid dni format";
            dniInput.classList.add("font-red");
            dniContainer.append(errorMessageElement3);
            errorMessageElement3.setAttribute('id', 'dniError');

        } else {
            signUpErrors.dni = null;
            dniInput.classList.add("greenBorder");
        }

    }
    dniInput.onfocus = function() {
        dniInput.classList.remove("greenBorder");
        var dniError = document.getElementById('dniError');
        if (dniError) {
            dniError.remove();
        }
    }
    

    // // dniInput.onfocus = function() {
    //         dniInput.classList.remove('greenBorder');
    //         dniInput.classList.remove('redBorder');
    //         var dniError = document.getElementById('dniError');
    //         if (dniError) {
    //             dniError.remove();
    //         }
    //     }
    // dniInput.onblur = function() {
    //     if (inputValue === "") {
    //             var errorMessage = "dni input is required";
    //             signUpErrors.dni = errorMessage;
    //             dniInput.classList.add('redBorder');
    //             var errorMessageElement3 = document.createElement('p');
    //             errorMessageElement3.setAttribute('id', 'dniError');
    //             errorMessage.classList.add("font-red");
    //             errorMessageElement3.innerText = errorMessage;
    //             dniInput.insertAdjacentElement('afterend', errorMessageElement3);
    //     } else {
    //             signInErrors.password = null;
    //             passwordInput.classList.add('greenBorder');
    //         }
    //     }

   


}