const parser = new DOMParser();

const parseCDATA = (textContent) => {
  const regExp = /<!\[CDATA\[(.*?)\]\]>/;
  const normalizeText = textContent.replace(regExp, '$1');
  return normalizeText;
};
const findPostsAndFeeds = (content) => new Promise((resolve, reject) => {
  try {
    const rssDom = parser.parseFromString(content, 'application/xml');
    const siteDescription = rssDom.querySelector('channel > title').innerHTML;
    const siteTitle = rssDom.querySelector('channel > description').innerHTML;
    const items = rssDom.querySelectorAll('item');
    const normalizeSiteDescription = parseCDATA(siteDescription);
    const normalizeSiteTitle = parseCDATA(siteTitle);

    const feed = {
      description: normalizeSiteDescription,
      title: normalizeSiteTitle,
    };
    const posts = Array.from(items).map((item) => {
      const itemTitle = item.querySelector('title').innerHTML;
      const itemLink = item.querySelector('link').innerHTML;
      const itemDescription = item.querySelector('description').innerHTML;

      const normalizeLink = parseCDATA(itemLink);
      const normalizeDescription = parseCDATA(itemDescription);
      const normalizeTitle = parseCDATA(itemTitle);

      const rssPost = {
        title: normalizeTitle,
        link: normalizeLink,
        description: normalizeDescription,
      };
      return rssPost;
    });
    resolve([feed, posts]);
  } catch (e) {
    reject(new Error('parseError'));
  }
});
export default findPostsAndFeeds;
