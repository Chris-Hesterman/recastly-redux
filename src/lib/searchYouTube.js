import moreData from '../data/moreData.js';

var searchYouTube = (query, callback) => {
  console.log('query in searchYouTube', query);
  switch (query) {
    case 'giraffes':
      callback(moreData.giraffes);
      break;
    case 'cats':
      callback(moreData.cats);;
      break;
    case 'pizza':
      callback(moreData.pizza);;
      break;
    case 'dogs':
      callback(moreData.dogs);;
      break;
    case 'linus tech tips':
      callback(moreData['linus tech tips']);
      break;
    default:
      console.log(query), 'query';
      console.log('no videos matching your query');
  }
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
