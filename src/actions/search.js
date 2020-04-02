import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var fetchVideos = (videos) => {
  return {
    type: 'SEARCH_YOUTUBE',
    videos: videos,
    currentVideo: videos[0]
  };
};

var handleVideoSearch = (q) => {
  return (dispatch) => {
    searchYouTube({ YOUTUBE_API_KEY, q }, (data) => {
      dispatch(fetchVideos(data.items));
    });
  };

  //old action:
  // searchYouTube({YOUTUBE_API_KEY, q}, (data) => {
  //   return {
  //     type: 'SEARCH_YOUTUBE',
  //     videos: data.items, //not sure what key on data
  //     currentVideo: data.items[0]
  //   }
  // });
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;
