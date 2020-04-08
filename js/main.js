$(document).ready(function () {

  //riferimenti html
  var sendBtn = $('.send-msg__send i');//bottone invio
  var textInput = $('.send-msg__input-box');//campo di testo invio messaggio
  var searchInput = $('.search__input');//campo di ricerca contatti
  var user = $('.user__msg')//blocco utente

  //funzione invio messaggio
  $(sendBtn).click(function () {
    var msg = textInput.val() //valore campo input 
    //se il campo input non è vuoto posta messaggio
    if (msg !== "") {
      $(".chat__active").append('<div class="active__message message--out">' + msg + '</div>');
      //svuota campo input
      textInput.val("");
      //funzione timeout che invia messaggio dopo 1 secondo
      setTimeout(function () {
        $(".chat__active").append('<div class="active__message message--in">Ok!</div>');
      }, 1000);
    }
  });


  /*   $(searchInput).keyup(function () {
      var searchedText = searchInput.val();
      console.log(searchedText)
  
    }); */

  $(searchInput).keyup(function (e) {
    console.log(e.target.value);
    $.each(user, function () {
      var currentUser = $('.msg__user-name-last p', this).html().toLowerCase();
      console.log(currentUser)
      if (currentUser.includes(e.target.value)) {
        $(this).show();
        console.log('pippo')
      } else {
        $(this).hide();
      }
    });
  });

});



