import React from 'react';

var VideoPlayer = (props) => {
  console.log(props);
  return (
  !props.video
  ? <div className="video-player">Please wait...</div>
  : <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${props.video.id.videoId}`} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.video.snippet.title}</h3>
      <div>{props.video.snippet.description}</div>
    </div>
      </div> 
  );
}
  



// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  currentVideo: React.PropTypes.object.isRequired
};

export default VideoPlayer;
