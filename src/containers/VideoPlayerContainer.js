import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

//use click handler somehow?

const mapStateToProps = (state) => ({
  video: state.currentVideo
});

// const mapDispatchToProps = (dispatch) => ({
//   currentVideo: dispatch(currentVideo)
// });

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
