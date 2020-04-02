import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

var videoListReducer = (state = { videos: exampleVideoData }, action) => {
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return {
      videos: action.videos
    } 
  } else {
    return state;
  }
  //TODO: define a reducer for the videoList field of our state.
};

export default videoListReducer;
