const contentRequest = (url) => fetch(
  `https://allorigins.hexlet.app/get?url=${encodeURIComponent(url)}`,
  { cache: 'no-store' },
).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Network response was not ok.');
});
export default contentRequest;
