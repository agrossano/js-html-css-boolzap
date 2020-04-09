$(document).ready(function () {

  //riferimenti html
  var sendBtn = $('.send-msg__send i');//bottone invio
  var textInput = $('.send-msg__input-box');//campo di testo invio messaggio
  var searchInput = $('.search__input');//campo di ricerca contatti
  var user = $('.user__msg')//blocco utente


  //funzione che posta messaggio e risposta
  function appendText() {
    var msg = textInput.val() //valore campo input 
    //se il campo input non è vuoto posta messaggio
    if (msg) {
      $(".window--active ").append('<div class="window__message message--out"><span>' + msg + '</span><i class="fa fa-chevron-down f-right message-options"></i><div class="message__panel"><span>Info messaggio</span><span class="delete">Elimina messaggio</span></div></div>');
      //svuota campo input
      textInput.val("");
      //funzione timeout che invia messaggio dopo 1 secondo
      setTimeout(function () {
        $(".window--active ").append('<div class="window__message message--in"><span>Ciao!</span><i class="fa fa-chevron-down f-right message-options"></i><div class="message__panel"><span>Info messaggio</span><span class="delete">Elimina messaggio</span></div></div>');
      }, 1000);
    }
  }


  //funzione invio messaggio da click
  $(sendBtn).click(function () {
    appendText();
  });

  //funzione invio messaggio da pressione invio
  $(textInput).keypress(function (e) {
    if (e.which == 13) {
      appendText();
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


  //funzione cambio chat
  $(".user__msg").click(function () {
    //salvo index dell'user cliccato
    var clickedUser = $(this).index();
    //salvo riferimento al div dei messaggi
    var chatList = $('.right__chat > div')
    //rimuovo la classe window--active a tutti i div messaggi
    chatList.removeClass("window--active")
    //aggiungo la classe active all'user cliccato
    $(this).addClass("msg--active")
    //tolgo la classe active a tutti gli user ad eccetto di quello cliccato
    $('.user__msg').not(this).removeClass("msg--active")
    //aggiungo la classe active alla chat corrispondente l'user cliccato
    chatList.eq(clickedUser).addClass("window--active");
  });

  //funzione per rimuovere messaggio
  $('.chat__window').on("click", ".message__panel",
    function () {
      $(this).parent().remove();
    })


  //funzione per mostrare / nascondere pannello messaggi
  $('.chat__window').on("click", ".window__message i",
    function () {
      $(this).siblings().toggleClass("panel--active");
    })


});



