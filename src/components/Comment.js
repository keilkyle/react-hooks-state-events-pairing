import React from 'react';

function Comment(props) {
    return(
        <div>
            <h2>{props.user}</h2>
            <p>{props.comment}</p>
        </div>
    )
}

export default Comment;