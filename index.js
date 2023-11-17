let commentConatiner = document.getElementById('comment-conatiner');


function createInputBox(){
    let div = document.createElement('div');
    div.setAttribute('class', 'new-comment-adder');

    div.innerHTML += `
    <input type="text" class="comment-input" placeholder="Add your comment here">
            <button type="button" class="submit" role="button">Submit</button>
`
return div;
}

function addComment(text) {
    let div = document.createElement('div');
    div.setAttribute('class', 'comment-container');

    div.innerHTML +=`
    <div class='card'>
            <div class="comment-text">${text}</div>
            <div id='add-reply' class="add-reply">Add Reply</div>
    </div>`

    return div;
}

commentConatiner.addEventListener('click', function(e){
    let replayClicked = e.target.classList.contains('add-reply');
    let submitCLicked = e.target.classList.contains('submit');
    let closestCard = e.target.closest(".all-comment");

    if(replayClicked){
        //add input box
        closestCard.appendChild(createInputBox());
    }
    if(submitCLicked){
        //add new comment
        const commentDeatils = e.target.closest(".all-comment");
        if(commentDeatils.children[0].value){
            closestCard.appendChild(addComment(commentDeatils.children[0].value));
            commentDeatils.remove();
        }

    }
})