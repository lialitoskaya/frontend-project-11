import _ from 'lodash';
import findPostsAndFeeds from './findPostsAndFeeds.js';
import contentRequest from './contentRequest.js';

const updatePosts = (elements, url) => contentRequest(url)
  .then(([data]) => findPostsAndFeeds(data.contents))
  .catch((err) => {
    throw new Error(err.message);
  })
  .then(([rssFeed, rssPosts]) => {
    try {
      const newPosts = rssPosts.filter((p) => !_.find(elements.posts, p));
      const oldFeed = _.find(elements.feeds, { url });
      let currentFeed;
      if (oldFeed === undefined) {
        const newFeed = { ...rssFeed, id: _.uniqueId(), url };
        elements.feeds = [...elements.feeds, newFeed];
        currentFeed = newFeed;
      } else {
        currentFeed = oldFeed;
      }
      if (newPosts.length > 0) {
        newPosts.map((p) => {
          p.feedId = currentFeed.id;
          p.id = _.uniqueId();
        });
        elements.posts = [...newPosts, ...elements.posts];
      }
    } catch (e) {
      throw new Error('findFeedsAndPostsError');
    }
  })
  .then(() => {
    setTimeout(
      () => updatePosts(elements, url).catch((err) => console.error(err.message)),
      5000,
    );
  });

export default updatePosts;
