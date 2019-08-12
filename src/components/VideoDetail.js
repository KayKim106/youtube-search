import React from 'react';

const VideoDetail = ( { video } ) =>{

    if (!video) {
        return <div> Loading... </div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe 
                    title="viedo player"
                    width="560" 
                    height="315" 
                    src={videoSrc}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                >
                </iframe>
            </div>
            <div className ="ui segment">
                <h4 className="ui header"> { video.snippet.title } </h4>
                <p>{ video.snippet.description }</p>    
            </div>          
        </div>
    );
};
export default VideoDetail

