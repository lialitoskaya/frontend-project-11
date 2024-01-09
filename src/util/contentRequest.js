import setProxy from "./setProxy.js";

const contentRequest = (url) => {
  const promise = new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error("timeout of 10000ms exceeded"));
    }, 10000);

    fetch(setProxy(url)).then((response) => {
      clearTimeout(timeoutId);
      if (response.ok) {
        return resolve(response.json());
      }
      return reject(new Error("Network response was not ok."));
    });
  });

  return Promise.all([promise]).catch(() => {
    throw new Error("networkError");
  });
};

export default contentRequest;
