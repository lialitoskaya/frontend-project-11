const en = {
  translation: {
    header: 'RSS Reader',
    description: "Start reading RSS today! It's simple and lovely.",
    form: {
      inputFormat: 'RSS link',
      submit: 'Add',
    },
    example: 'An example: https://hexlet.io/lessons.rss',
    feedback: {
      success: 'RSS has been loaded',
      invalid: 'Must be valid URL',
      duplicate: 'RSS already exists',
      parseError: 'No valid RSS in the resource',
      networkError: 'Network error',
      unknow: 'Error reading RSS',
      findFeedsAndPostsError:
        'Error searching for new posts and feeds from RSS',
    },
    feeds: 'Feeds',
    posts: 'Posts',
    modal: {
      button: {
        show: 'Preview',
        readMore: 'Read more',
        close: 'Close',
      },
    },
  },
};
export default en;
