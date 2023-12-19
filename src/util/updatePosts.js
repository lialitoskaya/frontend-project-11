import _ from 'lodash';
import findPostsAndFeeds from './findPostsAndFeeds.js';
import contentRequest from './contentRequest.js';

const updatePosts = (elements, url) => {
  const rssPostsAndFeeds = contentRequest(url)
    .then((data) => findPostsAndFeeds(data.contents))
    .then(([rssFeed, rssPosts]) => {
      try {
        const newPosts = rssPosts.filter((p) => !_.find(elements.posts, p));
        const oldFeed = _.find(elements.feeds, { url });
        let currentId;
        if (oldFeed === undefined) {
          const newFeed = { ...rssFeed, id: _.uniqueId(), url };
          elements.feeds = [...elements.feeds, newFeed];
          currentId = newFeed.id;
        } else {
          currentId = oldFeed.id;
        }
        newPosts.map((p) => {
          p.feedId = currentId;
          p.id = _.uniqueId();
        });
        if (newPosts.length > 0) {
          elements.posts = [...newPosts, ...elements.posts];
        }
        return Promise.resolve();
      } catch (e) {
        return Promise.reject('feedsAndPostsStateRenderingError');
      }
    })
    .then(() => {
      setTimeout(() => updatePosts(elements, url), 5000);
    })
    .catch((err) => {
      throw new Error(err);
    });
  return rssPostsAndFeeds;
};
export default updatePosts;
