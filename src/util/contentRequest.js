const contentRequest = (url) => {
  const promise = new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('timeout of 10000ms exceeded'));
    }, 5000);
    fetch(
      `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(
        url,
      )}`,
    )
      .then((response) => {
        clearTimeout(timeoutId);
        if (response.ok) {
          return resolve(response.json());
        }
        throw new Error('Network response was not ok.');
      })
      .catch(() => reject(new Error('networkError')));
  });
  return Promise.all([promise]).catch(() => {
    throw new Error('networkError');
  });
};

export default contentRequest;
