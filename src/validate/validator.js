import { object, string, setLocale } from 'yup';

const urlValidator = (urlList, url, i18n) => {
  setLocale({
    string: {
      url: () => ({ key: 'feedback.invalid' }),
    },
    mixed: {
      notOneOf: () => ({ key: 'feedback.duplicate' }),
    },
  });

  const schema = object({
    url: string().url().notOneOf(urlList),
  });

  const result = schema
    .validate({ url })
    .then(() => {
      urlList.push(url);
    })
    .catch((e) => {
      const error = e.errors[0];
      const errorMessage = i18n.t(error.key);
      console.error(errorMessage);
      throw new Error(error.key);
    });

  return result;
};

export default urlValidator;
