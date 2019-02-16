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

    $.ajax({
      url: 'http://localhost:3000/games',
      method: 'get',
      dataType: 'json'
    }).done(function (response) {

      console.log("response: ", response);
      let game = new Game(response[0]);
      let gameHtmlData = game.gameHTML();
      console.log("game: ", game);
      console.log("gameHTMLData: ", gameHtmlData);
      $('div#main-display-div').html(gameHtmlData)
    })

    //alert("You clicked this button!");
    //$('div#main-display-div').html('<p id="content">"You clicked this button!"</p>')
  })
}

// function somelistener() {
// 	$('p#content').on('click', function (e) {
// 		e.preventDefault()

// 		console.log("now we clicked ");
// 	})
// }

class Game {
	constructor(obj) {
		this.title = obj.title
		// this.title = obj.title
		// this.title = obj.title
		// this.title = obj.title
		// this.title = obj.title
	}
}

Game.prototype.gameHTML = function () {
	return (`
		<div>${this.title}</div>
	`)
}