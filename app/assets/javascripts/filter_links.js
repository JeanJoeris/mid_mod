$(document).ready(function() {
  attachReadFilterEvent()
})

function attachReadFilterEvent() {
  $('#read_filter').on('click', filterReadLinks)
  $('#unread_filter').on('click', filterUnreadLinks)
}

function filterReadLinks () {
  checkedBool = $(this).is(':checked')
  $('.link').each(function() {
    var read = $(this).find('.link_read').text().trim()

    if (read === 'true' && checkedBool) {
      $(this).hide()
    } else {
      $(this).show()
    }
  })
}

function filterUnreadLinks () {
  checkedBool = $(this).is(':checked')
  $('.link').each(function() {
    var read = $(this).find('.link_read').text().trim()

    if (read === 'false' && checkedBool) {
      $(this).hide()
    } else {
      $(this).show()
    }
  })
}
