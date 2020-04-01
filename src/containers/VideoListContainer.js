import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => {};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
const mapStateToProps = (state) => ({
    videos: state.videos
  });

  const mapDispatchToProps = (dispatch) => ({
    videos: dispatch(videos)
  });
  

  return connect(mapStateToProps, mapDispatchToProps)(VideoList)
export default VideoListContainer;
