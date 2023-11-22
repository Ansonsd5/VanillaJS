const commentContainer = document.getElementById("comment-conatiner");



function createInput(){
    let div = document.createElement('div');
    div.setAttribute('class', "input-section");
    div.innerHTML += `
    <input class="user-input" id="user-input" type="text" />
    <button class="replybtn" id="replybtn">Reply</button>
    `
return div;
}

function commentAdder(userInput){
    let div = document.createElement('div');
    div.setAttribute('class','all-comments');

    div.innerHTML += `
    <div class="card">
                <span class="comment">${userInput}</span>
                <span class="add-reply" id="add-reply">Add reply</span>
            </div>`;
   return div;
}



commentContainer.addEventListener('click',function(e){
    let addReply = e.target.classList.contains("add-reply");
    let replyBtn = e.target.classList.contains("replybtn");
    let closestCard = e.target.closest(".all-comments");

    if(addReply){
        closestCard.appendChild(createInput());
    }

    if(replyBtn){
        const commentDeatils = e.target.closest(".input-section");
        if(commentDeatils.children[0].value){
            closestCard.appendChild(commentAdder(commentDeatils.children[0].value));
            commentDeatils.remove();
        }
    }

})


