//========================= this theme buld by MOSSADDAK from Bangladesh =========================
/*================== mossaddak15-2413@diu.edu.bd ==================*/

// var loader = document.getElementById("preloader");
// window.addEventListener("load", function(){
// 	loader.style.display = "none";
// })

$(function () {
    var loader = $(".preloader");

    $('html').css({
        overflow: 'hidden'
    });

    $(window).on("load", function () {
        loader.fadeOut(1000);
        $('html').css({
            overflow: 'auto'
        });
    })

});