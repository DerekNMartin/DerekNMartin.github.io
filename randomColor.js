$(document).ready(function() {
  /* Random Link Color-------------------- */
  var randomLinks = $('a.random-color');
  var original = randomLinks.css('color');
  var colors = ["#16a085","#27ae60","#2980b9","#8e44ad","#f39c12","#d35400","#c0392b",]
  randomLinks.hover(function() { //mouseover
    var num = (Math.floor(Math.random() * colors.length))
    var col = colors[num];
    $(this).animate({
    'color': col,
    },100);
  },function() { //mouseout
    $(this).animate({
    'color': original,
    },500);
  });
  });