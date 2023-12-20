const contentRequest = (url) => {
  const promise = new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('timeout of 10000ms exceeded'));
    }, 10000);
    fetch(`https://allorigins.hexlet.app/get?url=${encodeURIComponent(url)}`, {
      cache: 'no-store',
    }).then((response) => {
      clearTimeout(timeoutId);
      if (response.ok) {
        resolve(response.json());
        return;
      }
      throw new Error('Network response was not ok.');
    });
  }).catch(() => {
    throw new Error('networkError');
  });
  return promise;
};
export default contentRequest;
