$(document).ready(function () {

  //riferimenti html
  var sendBtn = $('.send-msg__send i'); //bottone invio
  var textInput = $('.send-msg__input-box'); //campo di testo invio messaggio
  var searchInput = $('.search__input'); //campo di ricerca contatti
  var user = $('.user__msg'); //blocco utente



  //funzione che ritorna l'ora attuale
  function oraEsatta() {
    var dt = new Date(); //oggetto data
    var time = dt.getHours() + ":" + dt.getMinutes(); //salvo ora corrente
    return time;
  }


  //funzione che posta messaggio e risposta
  function appendText() {
    var msg = textInput.val(); //valore campo input 
    //se il campo input non è vuoto posta messaggio
    if (msg) {
      $(".window--active ").append('<div class="window__message message--out"><span>' + msg + '</span><span id="time">' + oraEsatta() + '</span><i class="fa fa-chevron-down f-right message-options"></i><div class="message__panel"><span>Info messaggio</span><span class="delete">Elimina messaggio</span></div></div>');
      textInput.val(""); //svuota campo input
      $('.header__user-name-last p:nth-child(2)').html('Sta scrivendo un messaggio...'); // Stampo l'avviso di "scrittura messaggio" prima di mandare la risposta
      //funzione timeout che invia messaggio dopo 1 secondo
      setTimeout(function () {
        $(".window--active ").append('<div class="window__message message--in"><span>Ciao!</span><span id="time">' + oraEsatta() + '</span><i class="fa fa-chevron-down f-right message-options"></i><div class="message__panel"><span>Info messaggio</span><span class="delete">Elimina messaggio</span></div></div>');
        $('.header__user-name-last p:nth-child(2)').html('Ultimo accesso oggi alle ' + oraEsatta()); //stampo messaggio con ultimo accesso
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

  //funzione ricerca contatti in ascolto su pressione tasti
  $(searchInput).keyup(function (e) {
    $.each(user, function () {
      //salvo il nome dell'user corrente e lo trasformo in lettere minuscole
      var currentUser = $('.msg__user-name-last p', this).html().toLowerCase(); //se il nome dell'utente nell'iterazione corrente è uguale al valore di input digitato mostro il div corrispondente, altrimenti lo nascondo
      if (currentUser.includes(e.target.value)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  //funzione cambio chat
  $(".user__msg").click(function () {
    var clickedUser = $(this).index(); //salvo index dell'user cliccato
    var chatList = $('.right__chat > div'); //salvo riferimento al div dei messaggi
    var userName = $(this).find('.msg__user-name-last p:nth-child(1)').html(); //salvo riferimento nome del contatto
    var userImg = $(this).find('.msg__user-img').html(); //salvo riferimento foto profilo contatto
    chatList.removeClass("window--active"); //rimuovo la classe window--active a tutti i div messaggi
    $(this).addClass("msg--active"); //aggiungo la classe active all'user cliccato
    $('.user__msg').not(this).removeClass("msg--active"); //tolgo la classe active a tutti gli user ad eccetto di quello cliccato
    chatList.eq(clickedUser).addClass("window--active"); //aggiungo la classe active alla chat corrispondente l'user cliccato
    $('.header__user-name-last p:nth-child(1)').html(userName); //cambio nome sezione header
    $('.header__user-img').html(userImg); //cambio immagine sezione header
  });

  //funzione rimozione messaggio
  $('.chat__window').on("click", ".message__panel span:nth-child(2)",
    function () {
      $(this).closest('.window__message').remove();
    })

  //funzione per mostrare / nascondere pannello messaggi
  $('.chat__window').on("click", ".window__message i",
    function () {
      $(this).siblings().toggleClass("panel--active");
    })
});



