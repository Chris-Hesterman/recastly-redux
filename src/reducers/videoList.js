import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
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
