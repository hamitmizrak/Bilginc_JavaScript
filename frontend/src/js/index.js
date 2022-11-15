//console.log(require('../../deneme'))
//console.log("Merhabalar webpack nasılsın")

//babel
let data1 = "babel merhabalar";
console.log(data1);

const data2 = "babel merhabalar";
console.log(data2);

const helloWorld = () => {
    console.log("merhabalar arrow function");
}
helloWorld();


// CORS
$(document).ready(function () {
    const URL = "http://localhost:9090/api/v1/cors";
    $.get(URL, function (data, status) {
        console.log(data);
        $("#cors_id").html("<br>" + data + "</br>")
    }); //end  $.get
});


// login :
$(function () {
    $("#submit_id").on("click", function () {
        let userEmail, userPassword;
        //email
        //password
    })
})


//login register
//registerId  registerModal
$(document).ready(function () {
    $("#basic-form").validate({
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        rules: {
            name: {
                required: true,
                minlength: 3,
            },
            password: {
                required: true,
                //number: true,
                //min: 8,
                //password: true,
            },
            email: {
                required: true,
                email: true,
            },
        },
        messages: {
            name: {
                minlength: "Minumum 3 karakter giriniz",
                required: "Ad alanı boş geçemezsiniz",
            },
            password: {
                required: "Şifre  alanını boş geçemezsiniz",
                //number: "Lütfen sayısal değer giriniz",
                //min: "şifre için en az 8 karakter olmalı",
            },
            email: {
                required: "Email alanını boş geçemezsiniz",
                email: "Email formatında girmediniz örneğin: xyz@deneme.com",
            },
        },
    });
});
