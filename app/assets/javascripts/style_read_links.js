$(document).ready(function () {
  stylizeReadLinks()
})

function stylizeReadLinks () {
  $('.link').each(function() {
    var readStatus = $(this).find('.link_read').text().trim()
    if (readStatus === 'true') {
      $(this).addClass('read')
    } else {
      $(this).removeClass('read')
    }
  })
}
