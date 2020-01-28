import React from "react";
 const style = {
     padding:"12em",
     height:"100%",
     width:"100%"
 }
const VideoDetail = ({video}) => {
    if(!video) {
        return(
            <div style={style} className="ui segment">
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
                <p></p>
                <p></p>
                <p></p>
            </div>
        )   
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;