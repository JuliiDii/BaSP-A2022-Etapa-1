window.onload = function(){
    var email = document.getElementById("email");
    function validarEmail (email){
        var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
        if (email.value === ""){
            email.classlist.add("redBorder");

    }
    email.onblur= function(){
    validarEmail
    }

}