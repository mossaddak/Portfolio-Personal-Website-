//========================= this theme buld by MOSSADDAK from Bangladesh =========================
/*================== mossaddak15-2413@diu.edu.bd ==================*/

$(function () {
    const ChangeNavOnScroll = () => {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".boster").css({
                display: "block"
            });
        } else {
            $(".boster").css({
                display: "none"
            });
        }
    };

    $(function () {
        $(window).scroll(ChangeNavOnScroll) // run on scroll
        ChangeNavOnScroll(); // run when index.js is loaded
    });
});
