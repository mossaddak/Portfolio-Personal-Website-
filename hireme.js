//========================= this theme buld by MOSSADDAK from Bangladesh =========================
/*================== mossaddak15-2413@diu.edu.bd ==================*/


$(function () {
  $(".hireme_BTN").click(function () {

    //modal on
    $(".hireMeModal").show("slow");
    $(".banner_btn").hide("slow");
    $(".CloseHireMeModalBtn").show("slow");

    //scroll disabled
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });

  })
  $(".CloseHireMeModalBtn").click(function () {

    //scroll restore
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });

    //modal disabled
    $(this).hide();
    $(".hireMeModal").hide("slow");
    $(".banner_btn").show();
  })
});

