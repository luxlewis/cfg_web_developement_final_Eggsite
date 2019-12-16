$(document).ready(function() {
  $("#submit-comment-button").click(function() {
    let comment = $("#comment-input").val();
    let commentHtml = constructCommentHtml(comment);
    $("#comments-section").append(commentHtml);
    $("#comment-input").val("");
  });
});

function constructCommentHtml(comment) {
  return `
    <div class="comment text-left d-flex mb-4">
      <div class="pr-2"><img src="../images/icons/girl-1.svg" class="avatar-icon pr-3"></div>
      <div>
        <div class="d-flex mb-2 align-items-baseline">
          <span class="comment-name font-weight-bold mr-4">CodeFirst:Girl</span>
          <span class="comment-age">Just now</span>
        </div>
        <p class="mb-1">${comment}</p>
        <div class="d-flex">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14 rating-icon mx-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#636363" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
          <span class="rating-counter">0</span>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14 rating-icon mx-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#636363" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
        </div>
      </div>
    </div>
  `;
}
