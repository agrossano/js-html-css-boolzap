$(document).ready(function () {
  //bottone invio
  var sendBtn = $('.send-msg__send i')

  //funzione invio messaggio
  $(sendBtn).click(function () {
    var text = $('.send-msg__input-box') //riferimento campo input 
    //se il campo input non è vuoto posta messaggio
    if (text.val() !== "") {
      $(".chat__active").append('<div class="active__message-out">' + text.val() + '</div>');
      //svuota campo input
      $(text).val('');


    }
  });

});



