const renderFeeds = (newFeeds, i18n) => {
  const feedsDiv = document.querySelector('.feeds');
  feedsDiv.innerHTML = '';
  feedsDiv.innerHTML = `<div class="card border-0"><div class="card-body"><h2 class="card-title h4">${i18n.t(
    'feeds',
  )}</h2></div></div>`;
  const ul = document.createElement('ul');
  ul.classList = 'list-group border-0 rounded-0';
  const feedsChild = feedsDiv.querySelector('.card');

  newFeeds.forEach(({ description, title }) => {
    const li = document.createElement('li');
    li.classList = 'list-group-item border-0 border-end-0';

    const p = document.createElement('p');
    p.classList = 'm-0 small text-black-50';
    p.innerHTML = description;

    const h3 = document.createElement('h3');
    h3.classList = 'h6 m-0';
    h3.innerHTML = title;

    li.prepend(h3, p);
    ul.prepend(li);
  });

  feedsChild.append(ul);
};
export default renderFeeds;
