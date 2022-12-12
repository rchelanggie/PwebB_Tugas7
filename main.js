$(document).ready(() => {
    $("#mhsForm").validate({
        rules: {
            nrp: {
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            nama: {
                maxlength: 100
            },
            tglLahir: {
                indonesianDate: true
            },
            email: {
                email: true
            },
            password: {
                minlength: 8
            },
            ulangiPassword: {
                equalTo: "#password"
            }
        },
        messages: {
            nrp: {
                digits: "NRP must consist of numbers",
                minlength: "NRP must consist of 10 digits",
                maxlength: "NRP must consist of 10 digits"
            },
            email: {
                email: "Email invalid"
            },
            password: {
                minlength: "Password should be a minimum of eight characters"
            },
            ulangiPassword: {
                equalTo: "Password is different"
            }
        }
    });
});