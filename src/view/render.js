import renderFeeds from './renderFeeds.js';
import renderPosts from './renderPosts.js';
import renderFeedback from './renderFeedback.js';
import renderForm from './renderForm.js';

const render = (elements, ui, i18n) => (path, value) => {
  if (path === 'ui.rssElements.feeds') {
    renderFeeds(ui.rssElements.feeds, i18n);
  }
  if (path === 'ui.rssElements.posts') {
    const {
      rssElements: { posts },
      seenPosts,
    } = ui;
    renderPosts(elements, posts, seenPosts, i18n);
  }
  if (path === 'ui.form.urlState.statusKey') {
    if (value.length > 0) {
      renderFeedback(elements, value, i18n);
    }
  }
  if (path === 'ui.form.urlState.state') {
    renderForm(elements, value);
  }
};
export default render;
