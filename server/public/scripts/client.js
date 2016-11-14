$(document).ready(function(){
console.log('js loaded');
  $.ajax({
    type: 'POST',
    url: '/jokes',
    success: function( data ){
      console.log(data[1].whoseJoke);
      $(".jokesToDom").append("<h2>" + data[0].whoseJoke + "</h2>");
      $(".jokesToDom").append("<p>" + data[0].jokeQuestion + "</p>");
      $(".jokesToDom").append("<p>" + data[0].punchLine + "</p>")
      $(".jokesToDom").append("<h2>" + data[1].whoseJoke + "</h2>");
      $(".jokesToDom").append("<p>" + data[1].jokeQuestion + "</p>");
      $(".jokesToDom").append("<p>" + data[1].punchLine + "</p>")
      $(".jokesToDom").append("<h2>" + data[2].whoseJoke + "</h2>");
      $(".jokesToDom").append("<p>" + data[2].jokeQuestion + "</p>");
      $(".jokesToDom").append("<p>" + data[2].punchLine + "</p>")
    },
    error: function(){
      console.log( 'tis broken good sir' );
    }
}); // end ajax

$(".submit").on('click', function(){
  event.preventDefault();

  // var objectToSend = {
  //   whoseJoke: $('#theAuthor').val(),
  //   jokeQuestion: $('#theJoke').val(),
  //   punchLine: $('#thePunchline').val(),
  //     }; // end objectToSend
  //
  //     $.ajax({
  //       type: 'POST',
  //       url: '/newjokes',
  //       data:  objectToSend,
  //       success: function( data ){
  //       },
  //       error: function(){
  //       }
  //     }); // end ajax
}); //end of submit event


});//ends document ready
