import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

var videoListReducer = (state = [], action) => {
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  } else {
    return state;
  }
  //TODO: define a reducer for the videoList field of our state.
};

export default videoListReducer;
