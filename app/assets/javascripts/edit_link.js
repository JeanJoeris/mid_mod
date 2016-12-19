$(document).ready(function () {
  $('.link-title').on('focusout', editLink)
  $('.link-url').on('focusout', editLink)
})

function editLink () {
  var title = $(this).closest('.link').find('.link-title')
  var url = $(this).closest('.link').find('.link-url')

  var id = $(this).closest('.link').data('id')
  var link = {
    title: title.text(),
    url: url.text()
  }

  $.ajax({
    url: `/api/v1/links/${id}`,
    method: 'put',
    type: 'json',
    data: link
  }).fail( displayEditFailure )
}

function displayEditFailure(failureData){
  // console.log("FAILED attempt to edit Link: " + failureData.responseText);
  $('.flash_messages').append(`<div class="alert alert-failure">FAILED attempt to edit Link: ${failureData.responseText}</div>`)
}
