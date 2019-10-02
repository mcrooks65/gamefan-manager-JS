// $(document).ready(function () {
//   $("button.js_index_games").on("click",function(e){
//     alert("You clicked this link!")
//     e.preventDefault();
//   })
// });

$(document).ready(function () {
	console.log('game.js loaded ...');
	getGames()
  showGame()
  showFreeHolderFans()
});

function getGames() {
  $("button#js_index_games").on("click",(e) => {
    e.preventDefault();

    $.ajax({
      url: 'http://localhost:3000/games',
      method: 'get',
      dataType: 'json'
    }).done((response) => {
      for (const key in response) {
        console.log(response[key].title); 
        let game = new Game(response[key]);
        let gameHtmlData = game.gameIndexHTML();
        $('div#main-display-div').append(gameHtmlData)

        // fetch(`/games.json`)
        //   .then(res => res.json())
        //   .then(data => console.log(data))
        // debugger;
    }
      //console.log("response: ", response);
      //console.log("game: ", game);
      //console.log("gameHTMLData: ", gameHtmlData);  
    })
  })
}

function showGame() {
  $("button#js_show_game").on("click",(e) => {
    e.preventDefault();

    $.ajax({
      url: 'http://localhost:3000/games/1',
      method: 'get',
      dataType: 'json'
    }).done((response) => {
      console.log("response: ", response);
      let game = new Game(response);
      let gameHtmlData = game.gameShowHTML();
      console.log("game: ", game);
      console.log("gameHTMLData: ", gameHtmlData);
      $('div#main-display-div').html(gameHtmlData)
      // debugger;
    })
  })
}

function showFreeHolderFans() {
  $("button#js_freeholder_fans").on("click",(e) => {
    e.preventDefault();

    $.ajax({
      url: 'http://localhost:3000/games/1',
      method: 'get',
      dataType: 'json'
    }).done((response) => {
      let nameArray = [];
      console.log("response: ", response);
      for (var i = 0, length = response.fans.length; i < length; i++){
        console.log(response.fans[i].name)
        nameArray[i] = response.fans[i].name
      } 
      nameArrayAsString = nameArray.join(', ');
      $('div#main-display-div').html("Total fans for FreeHolder: " + response.fans.length + "<br> Fan Names: " + nameArrayAsString)

    })
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
	  this.description = obj.description
		this.genre = obj.genre
    this.price = obj.price
    this.fans = obj.fans
	}
}

Game.prototype.gameIndexHTML = function () {
	return (`
    <button id=${this.title}>${this.title}</button>
    <br>
	`)
}

Game.prototype.gameShowHTML = function () {
	return (`
    <h1>${this.title}</h1>
    <h2>${this.genre.toUpperCase()} -------- $${this.price}</h2>
    <div>${this.description}</div>
  `)
}
