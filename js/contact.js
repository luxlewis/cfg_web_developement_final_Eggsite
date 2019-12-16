// $(document).ready(function() {
//   $("#feedback_button").click(function() {
//     form();
//   });
// });
//
// function form() {
//   $("form").slideToggle();
// }

$(document).ready(function() {
  $("#submit-button").click(function() {
    $(".thank-you").show();
    $("form").hide();
    $(".contact-title").hide();
  });
});
