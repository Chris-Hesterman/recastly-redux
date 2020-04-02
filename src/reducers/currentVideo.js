import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';

var currentVideoReducer = (state = { currentVideo: exampleVideoData[0]}, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    return {
      currentVideo: action.currentVideo
    }
  } else {
    return state;
  }
};

export default currentVideoReducer;
