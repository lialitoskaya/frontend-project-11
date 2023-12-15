import contentRequest from './contentRequest.js';

const parser = new DOMParser();

const findPostsAndFeeds = (url) => contentRequest(url)
  .then((data) => {
    const rssDom = parser.parseFromString(data.contents, 'application/xml');
    const siteDescription = rssDom.querySelector('channel > title').innerHTML;
    const siteTitle = rssDom.querySelector('channel > description').innerHTML;
    const items = rssDom.querySelectorAll('item');

    const feed = [
      {
        description: siteDescription,
        title: siteTitle,
      },
    ];

    const posts = Array.from(items).map((item) => {
      const itemTitle = item.querySelector('title').innerHTML;
      const itemLink = item.querySelector('link').innerHTML;
      const description = item.querySelector('description').innerHTML;

      const regExp = /<!\[CDATA\[(.*?)\]\]>/;
      const normalizeLink = itemLink.replace(regExp, '$1');
      const normalizeDescription = description.replace(regExp, '$1');

      const rssPost = {
        title: itemTitle,
        link: normalizeLink,
        description: normalizeDescription,
      };
      return rssPost;
    });

    return [feed, posts];
  })
  .catch(() => {
    throw new Error({ key: 'feedback.parseError' });
  });
export default findPostsAndFeeds;
