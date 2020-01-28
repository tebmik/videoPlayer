import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {
    const renderList = videos.map(video => {
        return <VideoItem key={video.snippet.title} onVideoSelect={onVideoSelect} video={video} />

    })

    return(
        <div className="ui relaxed divided list">
            <div className="item">
                {renderList}
            </div>
            
        </div>
    )
}

export default VideoList