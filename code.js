
var username = document.getElementById("sign_username");
var email = document.getElementById("sign_email");
var pass = document.getElementById("sign_pass");
var cpass = document.getElementById("sign_cpass");
var submit = document.getElementById("submit");

cpass.addEventListener("input", function () {
    if (pass.value != cpass.value) {
        cpass.setCustomValidity("Password Doesn't Match!");
    } else {
        cpass.setCustomValidity("");
    }
});
submit.addEventListener("click", function () {
    var password = pass.value;
    if (pass.value != cpass.value) {
        cpass.setCustomValidity("Password Doesn't Match!");
    } else {
        cpass.setCustomValidity("");
    }
    if (password.length < 8) {
        pass.setCustomValidity('Password must be at least 8 characters long');
    }


});
pass.addEventListener('input', function () {

    var password = pass.value;
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var digitRegex = /[0-9]/;
    var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    pass.setCustomValidity('');

    if (password.length < 8) {
        pass.setCustomValidity('Password must be at least 8 characters long');
    }

    if (!uppercaseRegex.test(password)) {
        pass.setCustomValidity('Password must contain at least one uppercase letter');
    }

    if (!lowercaseRegex.test(password)) {
        pass.setCustomValidity('Password must contain at least one lowercase letter');
    }

    if (!digitRegex.test(password)) {
        pass.setCustomValidity('Password must contain at least one digit');
    }

    if (!specialCharRegex.test(password)) {
        pass.setCustomValidity('Password must contain at least one special character');
    }

});

