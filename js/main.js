$(document).ready(function () {
  //variabile input

  var sendBtn = $('.send-msg__send')


  $(sendBtn).click(function () {
    var text = $('input')
    var input = $('.send-msg__input-box')
    if (text.val() !== "") {
      $(".chat__message-out ul").append('<li class="message-out__msg">' + text.val() + '</li>');
      $(text).val('');
    }
  });

});



