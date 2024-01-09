import renderModal from './renderModal.js';

const renderPosts = (elements, posts, seenPosts, i18n) => {
  const postsDiv = document.querySelector('.posts');
  postsDiv.innerHTML = '';
  postsDiv.innerHTML = `<div class="card border-0"><div class="card-body"><h2 class="card-title h4">${i18n.t(
    'posts',
  )}</h2></div></div>`;
  const ul = document.createElement('ul');
  ul.classList = 'list-group border-0 rounded-0';

  posts.forEach((post) => {
    const { title, link, id } = post;

    const li = document.createElement('li');
    li.classList = 'list-group-item d-flex justify-content-between align-items-start border-0 border-end-0';

    const a = document.createElement('a');
    a.href = link;
    a.innerHTML = title;
    a.setAttribute('data-id', id);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');

    const isNotSeenPost = seenPosts.every((p) => p.id !== id);

    a.classList = isNotSeenPost ? 'fw-bold' : 'fw-normal';

    const button = document.createElement('button');
    button.type = 'button';
    button.classList = 'btn btn-outline-primary btn-sm';
    button.setAttribute('data-id', id);
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#modal');
    button.textContent = i18n.t('modal.button.show');

    li.append(a, button);

    button.addEventListener('click', () => {
      renderModal(elements, post);
    });

    [a, button].forEach((el) => el.addEventListener('click', () => {
      seenPosts.push({ id });
      a.classList = 'fw-normal';
    }));

    ul.append(li);
  });

  const postsCard = postsDiv.querySelector('.card');
  postsCard.append(ul);
};
export default renderPosts;
