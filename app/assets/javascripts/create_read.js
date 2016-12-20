$(document).ready(function () {
  attachReadEvent()
  attachUnreadEvent()
})

function attachReadEvent() {
  $('.read-link').on('click', logReading)
}

function logReading () {
  var $link = $(this).closest('.link')
  var id = $link.data('id')
  var title = $link.find('.link-title').text()
  var url = $link.find('.link-url').text()
  var have_read = $link.find('.link_read').text().trim()
  var read = {link_id: id, link_title: title, link_url: url}
// debugger
  if (have_read !== 'true') {
    console.log('read');
    $.post('http://localhost:2000/api/v1/reads', read)
    .then(markLinkAsRead(id, $link))
  }
}

function markLinkAsRead (id, link) {
  $.ajax({
    url: `/api/v1/links/${id}`,
    method: 'put',
    type: 'json',
    data: {link: {read: true}}
  }).then(link.find('.link_read').text('true'))
  .then(link.addClass('read'))
}

function attachUnreadEvent () {
  $('.unread-link').on('click', logUnread)
}

function logUnread () {
  var $link = $(this).closest('.link')
  var id = $link.data('id')
  var have_read = $link.find('.link_read').text().trim()
  if (have_read === 'true') {
    markLinkAsUnread(id, $link)
  }
}

function markLinkAsUnread (id, link) {
  $.ajax({
    url: `/api/v1/links/${id}`,
    method: 'put',
    type: 'json',
    data: {link: {read: false}}
  }).then(link.find('.link_read').text('false'))
  .then(link.removeClass('read'))
}
