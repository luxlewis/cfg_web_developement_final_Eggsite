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
    $("form").slideToggle();
    $(".thank-you").show();
  });
});
