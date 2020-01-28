import React from "react";
import CommentItem from "./CommentItem";


const CommentList = ({comments}) => {
    const renderComment = comments.map(comment => {
        return <CommentItem comment={comment}/>
    })
    return(
        <div>
            {renderComment}
        </div>
    );
}

export default CommentList;