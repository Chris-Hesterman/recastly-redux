import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = () => {

  //use click handler somehow?

  const mapStateToProps = (state) => ({
    currentVideo: state.currentVideo
  });

  const mapDispatchToProps = (dispatch) => ({
    currentVideo: dispatch(currentVideo)
  });
  

  return connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
