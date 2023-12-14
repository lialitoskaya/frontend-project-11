import InitElements from '../util/init.js';

const renderModal = (post) => {
  const elements = new InitElements();
  const modal = elements.getModalElements();
  modal.buttons.readMore.href = post.link;
  modal.title.innerHTML = post.title;
  modal.body.innerHTML = post.description;
};

export default renderModal;
