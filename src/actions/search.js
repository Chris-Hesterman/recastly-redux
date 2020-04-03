import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// var fetchVideos = (videos) => {
//   return {
//     type: 'SEARCH_YOUTUBE', //none of our reducers match this
//     videos: videos,
//     currentVideo: videos[0]
//   }
// }

//make use of changeVideoList/changeVideo directly, rather than fetchVideos?
var handleVideoSearch = (q) => {
  return (dispatch) => {
    searchYouTube(q, (data) => {   //removed YOUTUBE_API_KEY
      dispatch(changeVideoList(data));
      dispatch(changeVideo(data[0]));
    });
  }
}

  //old action:
  // searchYouTube({YOUTUBE_API_KEY, q}, (data) => {
  //   return {
  //     type: 'SEARCH_YOUTUBE',
  //     videos: data.items, //not sure what key on data
  //     currentVideo: data.items[0]
  //   }
  // });
  //TODO:  Write an asynchronous action to handle a video search!
// };

export default handleVideoSearch;
