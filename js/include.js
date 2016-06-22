$(function(){
  var includes = $('.include');
  jQuery.each(includes, function(){
    var file = 'layout/' + $(this).data('include') + '.html';
    $(this).load(file, function(){
      var script = document.createElement( 'script' );
      script.type = 'text/javascript';
      script.src = 'js/yunhuni.js';
      $("body").append(script)
    });
  });
});
