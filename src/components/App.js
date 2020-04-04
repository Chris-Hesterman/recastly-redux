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

    // this.state = {
    //   videos: [],
    //   currentVideo: null
    // };

    this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }

  componentDidMount() {
    console.log('component didMount');
    this.getYouTubeVideos('giraffes');
  }

  handleVideoListEntryTitleClick(video) {
    store.dispatch(changeVideo(video));
  }

  //refactor? get rid of props/state references?
  //called by handleSearchChange
  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    //take out setState and instead call respective actions
    this.props.searchYouTube(options, (videos) => {
      store.dispatch(changeVideoList(videos));
      store.dispatch(changeVideo(videos[0]));
    })

      // this.setState({
      //   videos: videos,
      //   currentVideo: videos[0]
      // })
    // );
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
