import React, {useState} from 'react';
import Comment from "./Comment";

function Comments({vid}) {
    
    const [commentsToggle, commentToggler] = useState(false)
    let commentText = ""
    let commentList = []

    function toggleHandler() {
        const commentsToggleTwo = !commentsToggle
        commentToggler(commentsToggleTwo)
    }

    if (commentsToggle) {
        commentText = "Hide Comments"
        commentList = vid.comments
    } else {
        commentText = "Show Comments"
        commentList = []
    }
    
    return(
        <div>
            <button onClick={toggleHandler}>{commentText}</button>
            {commentList.map((i) => {
                return <Comment key={i.id} user={i.user} comment={i.comment} />
            })}   
        </div>
    )
}

export default Comments;