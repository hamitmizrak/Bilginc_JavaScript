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


$(document).ready(function () {
    const URL = "http://localhost:9090/api/v1/cors";
    $.get(URL, function (data, status) {
        console.log(data);
        $("#cors_id").html("<br>" + data + "</br>")
    }); //end  $.get
});
