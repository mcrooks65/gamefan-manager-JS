import $ from "jquery";
$(document).ready(function () {
  $("button.js_index_games").on("click",function(e){
    alert("You clicked this link!")
    e.preventDefault();
  })
});