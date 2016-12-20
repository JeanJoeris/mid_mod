$(document).ready(function () {
  attachSearchEvent()
})

function attachSearchEvent () {
  $('#search_links').on('keyup', searchLinks)
}

function searchLinks () {
  var searchText = $('#search_links').val().toLowerCase()
  $(".link").each(function(){
    var title = $(this).find(".link-title").text().toLowerCase()
    var url = $(this).find(".link-url").text().toLowerCase()
    var isResult =
      title.includes(searchText.toLowerCase()) || url.includes(searchText.toLowerCase())
    if(isResult) {
      $(this).closest(".link").show()
    } else {
      $(this).closest(".link").hide()
    }
  })
}
