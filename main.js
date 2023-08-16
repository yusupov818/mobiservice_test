$(document).ready(function () {
  $("#touch").click(function () {
    $(".disp-none").slideDown("ease");
  });

  $(".wrapper .phone").mask("+998 99 999 99 99");

  /*-----------------
        HAMBURGER MENU
    -----------------*/
  $("#hamburger_btn").on("click", function (e) {
    e.preventDefault();
    $(".hamburger_menu, .overlay").addClass("active");
    $("body").addClass("disable");
  });
  $(".hamburger_close, .overlay").on("click", function () {
    $(".hamburger_menu, .overlay").removeClass("active");
    $("body").removeClass("disable");
  });
  /*-----------------
    HAMBURGER MENU
        -----------------*/

  let navs = $(".hamburger_menu_list a");
  $(navs).on("click", function () {
    $(".hamburger_menu, .overlay").removeClass("active");
    $("body").removeClass("disable");
  });

  let imgs = $(".ser-foto nav");
  $(".ser-foto nav").hide();
  $(".ser-foto nav").first().show();

  $(".servise-block").on("click", function () {
    let target = $(this).data("target");
    $(".ser-foto nav")
      .not("." + target)
      .hide();
    $(".ser-foto ." + target).show();
  });

  $(".call-back-form form").on('submit', function(e){
    e.preventDefault();
    let form = $(this);
    let formData = $(this).serialize();
    let formButton = $(this).find('button');
    let formButtonText = formButton.text();

    formButton.text('Отправляется...');
    formButton.attr('disabled',true);
    $.ajax({
      url: '/send.php',
      method: 'post',
      data: formData,
      success: function(data){
        formButton.text(formButtonText);
        formButton.removeAttr("disabled");
        form[0].reset();
        iziToast.show({
            title: 'Ваша заявка принято!',
            message: 'Спасибо за обращение! В ближайшее время наш менеджер свяжется с Вами.',
            position: 'topRight'
        });
      }
    })
  })
});

