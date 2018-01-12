
$("#pin_submit").click(function () {
    // e.preventDefault();
    var pin = $("#pin1").val();
//            alert(pin);


    $.ajax({
        url: "pin_verify.php",
        type: "post",
        data: {pin: pin},
        success: function (res) {
            if (isNaN(res)){
                $("#op").html(res);
            }else{
                $("#op").html();
                $("#pin2").val(res);
            }
        }
    });
});