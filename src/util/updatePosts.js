import _ from 'lodash';
import findPostsAndFeeds from './findPostsAndFeeds.js';

const updatePosts = (elements, url) => findPostsAndFeeds(url)
  .then(([rssFeed, rssPosts]) => {
    const newPosts = _.differenceWith(rssPosts, elements.posts, _.isEqual);
    const newFeeds = _.differenceWith(rssFeed, elements.feeds, _.isEqual);
    elements.feeds = [...elements.feeds, ...newFeeds];
    elements.posts = [...newPosts, ...elements.posts];
    setTimeout(() => updatePosts(elements, url), 5000);
  })
  .catch(() => {
    throw new Error('feedback.parseError');
  });
export default updatePosts;
