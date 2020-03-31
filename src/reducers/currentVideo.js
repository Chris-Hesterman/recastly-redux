import Redux from 'redux';

var currentVideoReducer = (state, action) => {
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
