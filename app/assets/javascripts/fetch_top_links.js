$(document).ready(function () {
  loadTopLinks()
})

function loadTopLinks() {
  $.getJSON('http://localhost:2000/api/v1/reads')
  .then(function(topLinks) {
    topLinks.forEach(renderTopLink)
  })
}

function renderTopLink(link) {
  $('#top_reads').append(topLinkHTML(link))
}

function topLinkHTML (link) {
  return `<div class='top_link container' data-id='${link.id}' id="link-${link.id}">
            <p class='link-title' contenteditable=true>${ link.link_title }</p>
            <p class='link-url' contenteditable=true>${ link.link_url }</p>
            <p class='link_read_count'># of reads - ${link.read_count}</p>
          </div>`
}
