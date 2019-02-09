// $(document).ready(function () {
//   $("button.js_index_games").on("click",function(e){
//     alert("You clicked this link!")
//     e.preventDefault();
//   })
// });

$(document).ready(function () {
	console.log('game.js loaded ...');
	getGames()

});

function getGames() {
  $("button#js_index_games").on("click", function (e) {
    e.preventDefault();

    //alert("You clicked this button!");
    $('div#main-display-div').html('<p id="content">"You clicked this button!"</p>')
  })
}