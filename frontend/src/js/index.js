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


//////////////////////////////////////////////////////////////////////////////

//## CORS ##
$(document).ready(function () {
    const URL = "http://localhost:9090/api/v1/cors";
    $.get(URL, function (data, status) {
        console.log(data);
        $("#cors_id").html("<br>" + data + "</br>")
    }); //end  $.get
});

//////////////////////////////////////////////////////////////////////////////
//## LOGIN ##
$(function () {
    $("#btnSubmit").click(function () {
        let user_email, user_password;
        //email
        user_email = $("#user_email").val();
        user_email = jQuery.trim(user_email);
        //alert(user_email);

        //password
        user_password = $("#user_password").val();
        user_password = jQuery.trim(user_password);
        //alert(user_password);

        /* email */
        if (user_email == "") {
            $('#validation_email').html("Email alanı boş geçemezsiniz");
        } else if (validateEmail(user_email) == false) {
            $('#validation_email').html("Email'i uygun formatta yazmadınız. örnek: deneme@xyz.com")
        }

        /* validation email */
        let validateEmail = (user_email) => {
            const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
            return regex.test(user_email);
        }

        /* password */
        if (user_password == "") {
            $('#validation_password').html("Şifre Alanı boş geçilemez");
        }
    });
})

//////////////////////////////////////////////////////////////////////////////
//## REGISTER ##
$(document).ready(function () {
    $("#cdn_register_validation").validate({
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


//////////////////////////////////////////////////////////////////////////////
//## AJAX ##

// GET
$(function () {
    $('#ajaxGet').click(function () {
        let BASE_URL = "http://localhost:4444";
        let tbody = $('#tbody_id');
        $.ajax({
            method: "GET",
            url: BASE_URL + "/posts"
        }).done(function (datas) {
            for (let i = 0; i < 20; i++) {
                let trHtml = "";
                trHtml += '<tr><td>' + datas[i].id + '</td><td>' + datas[i].name + '</td><td>' + datas[i].surname + '</td><tr>';
                tbody.append(trHtml);
            } // end for
        })//end done
            .fail(function () {
                alert("Listeleme hata meydana geldi. Server çalışmıyor olabilir.")
            })
    });
}); //end GET document.ready

// POST
$(function () {
    $('#ajaxPost').click(function () {
        let BASE_URL = "http://localhost:4444";
        let tbody = $('#tbody_id');
        $.ajax({
            method: "POST",
            url: BASE_URL + "/posts",
            data: {
                //"id": $("#post_id").val(),
                "name": $("#post_name").val(),
                "surname": $('#post_surname').val()
            }
        }).done(function (datas) {
            for (let i = 0; i < 20; i++) {
                let trHtml = "";
                trHtml += '<tr><td>' + datas[i].id + "</td><td>" + datas[i].name + '</td><td>' + datas[i].surname + '</td><td><i class="fa-solid fa-trash"></i></td>  </tr>';
                tbody.append(trHtml);
            }//end for
        }).fail(function () {
            alert("Ekleme sırasında hata meydana geldi belki server'i açmadınız")
        }); //end fail
    });
    $('#ajaxGet').trigger("click");
}); //end POST document.ready