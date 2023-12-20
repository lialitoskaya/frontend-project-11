import renderFeeds from './renderFeeds.js';
import renderPosts from './renderPosts.js';
import renderFeedback from './renderFeedback.js';

const render = (state, i18n) => (path, value) => {
  if (path === 'ui.rssElements.feeds') {
    renderFeeds(state.rssElements.feeds, i18n);
  }
  if (path === 'ui.rssElements.posts') {
    renderPosts(state.rssElements.posts, state.seenPosts, i18n);
  }
  if (path === 'ui.form.urlState.statusKey') {
    renderFeedback(value, i18n);
  }
};
export default render;
