import React from "react";
import Youtube from "../apis/Youtube";
import Comments from "../apis/Comments";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import NavBar from "./navbar/NavBar";

import CommentList from "./comments/CommentList";
import CommentInput from "./comments/CommentInput";

class App extends React.Component {

    state = { 
        videos: [],
        selectedVideo: null,
        comments: [],
        renderChildren: false
    }

    async componentDidMount(){
        await this.onFormSubmit('awesome visuals')
    }
    
    onFormSubmit = async term => {
        const response = await Youtube.get("./search", {
            params: { q:term }
        })
        const commentRes = await Comments.get("./comments", {
            params: {
                "kind": "youtube#commentListResponse"
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
            comments: commentRes.data.items,
            renderChildren: true
        })
        
        console.log(commentRes.data.items)
        console.log({videos: response.data.items})
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }
    
    render(){
        const { renderChildren } = this.state 
        return(
            <div className="page-wrapper ui container">
                
                <NavBar onFormSubmit={this.onFormSubmit} />
               
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                            { renderChildren ? <CommentInput /> : "" }
                            <CommentList comments={this.state.comments} />
                            
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;