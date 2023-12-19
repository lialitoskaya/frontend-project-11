import renderFeeds from './renderFeeds.js';
import renderPosts from './renderPosts.js';
import renderFeedback from './renderFeedback.js';
import InitElements from '../util/init.js';

const render = (rssElements, i18n) => (path, value) => {
  const elements = new InitElements();
  const modalElements = elements.getModalElements();

  if (path === 'uiFormState.modal.mode') {
    if (value === 'close') {
      modalElements.buttons.readMore.href = '';
      modalElements.title.innerHTML = '';
      modalElements.body.innerHTML = '';
    }
  }
  if (path === 'rssElements.feeds') {
    renderFeeds(rssElements.feeds, i18n);
  }
  if (path === 'rssElements.posts') {
    renderPosts(rssElements.posts, i18n);
  }
  if (path === 'uiForm.urlState') {
    renderFeedback(value, i18n);
  }
};
export default render;
