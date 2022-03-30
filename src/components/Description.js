import React, { useState } from 'react';

function Description({vid}) {
    
    const [up, upvoter] = useState(vid.upvotes)    
    const [down, downvoter] = useState(vid.downvotes)    

    function upHandler() {
        let newUp = up + 1
        upvoter(newUp)
    }
    
    function downHandler() {
        let newDown = down + 1
        downvoter(newDown)
    }

    return(
        <div>
            <h1>{vid.title}</h1>
            <p>{vid.views} | Uploaded {vid.createdAt}</p>
            <div>
                <button onClick={upHandler}>{up}</button>
                <button onClick={downHandler}>{down}</button>
            </div>
        </div>
    )
}

export default Description;