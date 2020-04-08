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
        $(".chat__active").append('<div class="active__message message--in">Ciao!</div>');
      }, 1000);
    }
  });


  //funzione ricerca contatti in ascolto pressione tasti
  $(searchInput).keyup(function (e) {
    $.each(user, function () {
      //salvo il nome dell'user corrente e lo trasformo in lettere minuscole
      var currentUser = $('.msg__user-name-last p', this).html().toLowerCase();
      //se il nome dell'utente nell'iterazione corrente è uguale al valore di input digitato mostro il div corrispondente, altrimenti lo nascondo
      if (currentUser.includes(e.target.value)) { //
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});



