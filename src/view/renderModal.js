const renderModal = (elements, post) => {
  const { buttons, title, body } = elements.modalElements;
  buttons.readMore.href = post.link;
  title.innerHTML = post.title;
  body.innerHTML = post.description;
};

export default renderModal;
