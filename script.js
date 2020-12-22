function enterSite() {

    $("#landing").css("transform", "translate(-200vw)");

    $("#dimmed-bg").css("visibility", "visible");

    $("#dimmed-bg").css("transform", "translate(0)");

    $("#above-fold").css("opacity", "1");

    $("#full-site").css("visibility", "visible");

    $("#full-site").css("overflow", "visible");

    $("#full-site").css("max-height", "auto");

    $("#register-side-bar").css("transform", "translate(0)");

}





$("#visible-section").mouseenter(function() { openForm(); });

$("#empty-section").mouseenter(function() { closeForm(); });

$("#form-section").mouseleave(function() { closeForm(); });



function openForm() {

    $("#register-side-bar").css("transform", "translate(-650px)");

    $("#register-side-bar").css("transition-delay", "0s");

    $("#register-side-bar").css("z-index", "100");



    $("#call-num").css("opacity", "0");

    $("#reg").css("opacity", "0");

}



function closeForm() {

    $("#register-side-bar").css("transform", "translate(0)");

    $("#register-side-bar").css("z-index", "0");

    $("#call-num").css("opacity", "1");

    $("#reg").css("opacity", "1");

}

function formValidate() {
    var e = document.f1.email.value;
    var n = document.f1.username.value;
    var p = document.f1.pass.value;
    var cp = document.f1.con_pass.value;
    var no = document.f1.num.value;

    if (e == null || e == "") {
        alert("Please Enter Email!!!!!");
        return false;
    }

    if (!isNaN(n)) {
        alert("Username should be in alphabets only.");
        return false;
    }

    if (n == null || n == "") {
        alert("Please Enter Username!!!!!");
        return false;
    }

    if (p == null || p == "" || p.length < 6) {
        alert("Please Enter Correct Password!!!!!")
        return false;
    }

    if (p != cp) {
        alert("Passswords Do Not Match");
        return false;
    }

    if (e == null || e == "") {
        alert("Please enter your email!");
        return false;
    }

    if (e.search("gmail") == -1 && e.search("yahoo") == -1) {
        alert("Incorrect email!");
        console.log("gmail");
        return false;
    }


    if (e.search("ac.in") != -1) {
        alert("Incorrect email!");
        console.log("ac.in");
        return false;
    }

    if (e.search("edu") != -1) {
        alert("Incorrect email!");
        console.log("edu");
        return false;
    }

    if (no.length != 10) {
        alert("Phone number should be of 10 digits!");
        return false;
    }

    if (isNaN(no)) {
        alert("Incorrect phone number");
        return false;
    }

    if (no == "" || no == null) {
        alert("Enter contact number");
        return false;
    }

}



//our addition

$('#gs').click(function() {

    $('html, body').animate({

            scrollTop: $("#info-section").offset().top

        }, 2000) // any value you need

});



$('#gsB').click(function() {

    $('html, body').animate({

            scrollTop: $("#info-section").offset().top

        }, 2000) // any value you need

});



$('#testi').click(function() {

    $('html, body').animate({

            scrollTop: $("#testimonials").offset().top

        }, 2000) // any value you need

});



$('#DoW').click(function() {

    $('html, body').animate({

            scrollTop: $("#weekly-deal").offset().top

        }, 2000) // any value you need

});



$('#ru').click(function() {

    $('html, body').animate({

            scrollTop: $("#footer").offset().top

        }, 2000) // any value you need

});





(function manageTotalUsers() {

    let totalUsers = String(getRandom(100000, 200000));

    totalUsers = addComma(totalUsers);



    addToTotalUsers(totalUsers);



    function addToTotalUsers(currentValue) {

        let num = Number(currentValue.replace(",", ""));

        num++;

        num = String(num);

        num = addComma(num);

        $("#total-users").html(num);

        setTimeout(function() {

            addToTotalUsers(num);

        }, getRandom(100, 2000));

    }



    function getRandom(min, max) {

        return Math.floor(Math.random() * (max - min) + min);

    }



    function addComma(num) {

        return num.slice(0, 3) + "," + num.slice(3, 6);

    }



})();