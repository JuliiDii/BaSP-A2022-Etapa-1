window.onload = function() {
    var signUpErrors = {
        name :'Required',
        surname :'Required',
        dni : 'Required',
        dateOfBirth : 'Required',
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
    var surnameContainer = document.getElementById("surnameContainer");
    var dniContainer = document.getElementById("dniContainer");
    var dateOfBirthContainer = document.getElementById("dateOfBirthContainer");
    var phoneContainer = document.getElementById("phoneContainer");
    var addressContainer = document.getElementById("addressContainer");
    var localityContainer = document.getElementById("localityContainer");
    var postcodeContainer = document.getElementById("postcodeContainer");
    var emailContainer = document.getElementById("emailContainer");
    var passwordContainer = document.getElementById("passwordContainer");
    var repearPasswordContainer = document.getElementById("repeatPasswordContainer");


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
        var nameError = document.getElementById("nameError");
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
        if (dnicheck.test (dniInput.value) === false){
            var errorMessageElement3 = document.createElement('p');
            errorMessageElement3.innerText= "Invalid dni format"
            errorMessageElement3.classList.add ("font-red");
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
    dateOfBirthInput.onblur= function(){
        var year = dateOfBirthInput.value.split("-");
        if (dateOfBirthInput.value === "" || year[0]>2004){
            var errorMessageElement4 = document.createElement('p');
            errorMessageElement4.innerText= "too young";
            errorMessageElement4.classList.add ("font-red");
            dateOfBirthContainer.append(errorMessageElement4);
            errorMessageElement4.setAttribute("id", "dateOfBirthError");

        }else{
            signUpErrors.dateOfBirth = null;
            dateOfBirthInput.classList.add("greenBorder");
        }

    }
    dateOfBirthInput.onfocus = function() {
        dateOfBirthInput.classList.remove("greenBorder");
        var dateOfBirthError = document.getElementById("dateOfBirthError");
        if (dateOfBirthError) {
            dateOfBirthError.remove();
        }
    }

    phoneInput.onblur = function(){
        if (phoneInput.value ===""){
            var errorMessageElement4 = document.createElement('p');
            errorMessageElement4.innerText= "Invalid phone number"
            errorMessageElement4.classList.add ("font-red");
            phoneContainer.append(errorMessageElement4);
            errorMessageElement4.setAttribute("id", "phoneError");
        }
    }


}