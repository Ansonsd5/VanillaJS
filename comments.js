const allComments = document.getElementById("all-comments");


function addReply(e){
  let div = document.createElement('div');
  div.setAttribute('class',"card");

  div.innerHTML += `
  <span>This is the First comment</span>
  <span class="addreplay">Add Reply</span>`

  return div;
}

