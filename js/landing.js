//$(".grid-content-egg").hover(function() {
//  $("href").effect( "bounce", {times:3}, 300 );
//});
$(document).ready(function() {
  $(".grid-content-egg").mouseenter(function() {
    $(this).effect("bounce", 1000);
  });
});
