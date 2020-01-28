import React from "react";

const CommentItem  = ({comment}) => {
    return(
        <div className="ui relaxed large list">
            <div className="item">
                <img className="ui avatar mini image" src={comment.snippet.authorProfileImageUrl}/>
                <div className="content">
                    <div className="header">
                        {comment.snippet.authorDisplayName}
                        {comment.snippet.publishedAt}
                    </div>
                    <p className="description">{comment.snippet.textOriginal}</p>
                    <i className="thumbs up icon">
                        {comment.snippet.likeCount}
                        {comment.snippet.canRate}
                    </i>
                </div>
            </div>
        </div>
    );
}

export default CommentItem;