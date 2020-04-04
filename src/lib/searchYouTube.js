import moreData from '../data/moreData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = function (query, callback) {

  var options = {
    part: 'snippet',
    key: YOUTUBE_API_KEY,
    q: query,
    maxResults: 5,
    type: 'video',
    videoEmbeddable: 'true'
  }

  console.log('query in searchYouTube', query);

  var url = 'https://www.googleapis.com/youtube/v3/search?' + $.param(options);

  fetch(url)
    .then((response) => {
      console.log(response, 'response');
      return response.json();
    })
    .then((data) => {
      callback(data.items);
    })
    .catch((error) => {
      console.error('Error:', error);
    });



  // $.get('https://www.googleapis.com/youtube/v3/search', {
  //   part: 'snippet',
  //   key: key,
  //   q: query,
  //   maxResults: max,
  //   type: 'video',
  //   videoEmbeddable: 'true'
  // })
  //   .done(({items}) => {
  //     if (callback) {
  //       callback(items);
  //     }
  //   })
  //   .fail(({responseJSON}) => {
  //     responseJSON.error.errors.forEach((err) =>
  //       console.error(err)
  //     );
  //   });

};

export default searchYouTube;


  // switch (query) {
  //   case 'giraffes':
  //     callback(moreData.giraffes);
  //     break;
  //   case 'cats':
  //     callback(moreData.cats);;
  //     break;
  //   case 'pizza':
  //     callback(moreData.pizza);;
  //     break;
  //   case 'dogs':
  //     callback(moreData.dogs);;
  //     break;
  //   case 'linus tech tips':
  //     callback(moreData['linus tech tips']);
  //     break;
  //   default:
  //     console.log(query), 'query';
  //     console.log('no videos matching your query');