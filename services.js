//========================= this theme buld by MOSSADDAK from Bangladesh =========================
/*================== mossaddak15-2413@diu.edu.bd ==================*/

const value = $(".category_btn").attr('data-filter');
if (value == "Services") {
    $('.service_itembox').not('.' + value).hide('slow');
}
$(function () {
    $(".category_btn").click(function () {
        $(this).addClass('category_btn_active').siblings().removeClass('category_btn_active')
        const value = $(this).attr('data-filter');
        $('.service_itembox').filter('.' + value).show('slow');
        $('.service_itembox').not('.' + value).hide('slow');
    });
});