import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

//make use of changeVideoList/changeVideo directly, rather than fetchVideos?
var handleVideoSearch = (q) => {
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
  };
  return (dispatch) => {
    searchYouTube(options, (data) => {   //removed YOUTUBE_API_KEY
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  }
}

export default handleVideoSearch;
