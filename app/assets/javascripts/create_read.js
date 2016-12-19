$(document).ready(function () {
  $('.read-link').on('click', logReading)
})

function logReading () {
  var $link = $(this).closest('.link')
  var id = $link.data('id')
  var title = $link.find('.link-title').text()
  var url = $link.find('.link-url').text()
  read = {link_id: id, link_title: title, link_url: url}

  $.post('http://localhost:2000/api/v1/reads', read)
  .then(markLinkAsRead(id))
}

function markLinkAsRead (id) {
  $.ajax({
    url: `/api/v1/links/${id}`,
    method: 'put',
    type: 'json',
    data: {link: {read: true}}
  })
}
