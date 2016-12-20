var $newLinkTitle, $newLinkUrl;

$(document).ready(function(){

  $newLinkTitle = $("#link_title");
  $newLinkUrl  = $("#link_url");

  $("#submit_link").on('click', createLink);
})

function createLink (event){
  event.preventDefault();

  var link = getLinkData();

  $.post("/api/v1/links", link)
   .then( renderLink )
   .then( attachReadEvent )
   .fail( displayFailure )
 }

function getLinkData() {
 return {link: {
   title: $newLinkTitle.val(),
   url: $newLinkUrl.val()
 }}
}

function renderLink(link){
  $("#links_list").append( linkHTML(link) )
  clearLink();
}

function linkHTML(link) {

    return `<div class='link container' data-id='${link.id}' id="link-${link.id}">
              <p class='link-title' contenteditable=true>${ link.title }</p>
              <p class='link-url' contenteditable=true>${ link.url }</p>

              <p class="link_read">
                ${ link.read }
              </p>
              <p class="link_buttons">
                <button class='delete-link'>Delete</button>
                <button class='read-link'>Mark as read</button>
                <button class='unread-link'>Mark as unread</button>
              </p>
            </div>`
}

function clearLink() {
  $newLinkTitle.val("");
  $newLinkUrl.val("");
}

function displayFailure(failureData){
  $('.flash_messages').append(`<div class="alert alert-failure">FAILED attempt to create new Link: ${failureData.responseText}</div>`)
}
