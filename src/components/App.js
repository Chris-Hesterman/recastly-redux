import React from 'react';
import store from '../store/store.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';
import changeVideoList from '../actions/videoList.js';
import changeVideo from '../actions/currentVideo.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
    this.handleAutoPlayToggle = this.handleAutoPlayToggle.bind(this);
  }

  componentDidMount() {
    console.log('component didMount');
    this.getYouTubeVideos('giraffes');
  }

  handleVideoListEntryTitleClick(video) {
    store.dispatch(changeVideo(video));
  }

  getYouTubeVideos(query) {
    this.props.searchYouTube(query, (videos) => {
      store.dispatch(changeVideoList(videos));
      store.dispatch(changeVideo(videos[0]));
    });
  }

  handleAutoPlayToggle(e) {
    var newSource = $('#iframe').attr(src);
    newSource.concat('?autoplay=1');
    console.log(newSource, 'newSource');
    $('#iframe').attr('src', newSource);
  }

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer />
          </div>
        </nav>
        <div>
          <label className="switch">Autoplay </label>
          <input id="autoplay" type="checkbox"></input>
        </div>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
