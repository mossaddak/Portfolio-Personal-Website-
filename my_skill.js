//========================= this theme buld by MOSSADDAK from Bangladesh =========================
/*================== mossaddak15-2413@diu.edu.bd ==================*/

$(function () {
  $(".skill_BTN").click(function () {

    //counter up
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    //modal on
    $(".SkillModal").show("slow");
    $(".banner_btn").hide("slow");
    $(".CloseSkillModalBtn").show("slow");

    //scroll disabled
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });

  })


  $(".CloseSkillModalBtn").click(function () {

    //scroll restore
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });

    //modal disabled
    $(this).hide();
    $(".SkillModal").hide("slow");
    $(".banner_btn").show();
  })
});




