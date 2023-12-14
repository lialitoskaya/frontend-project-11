import { object, string } from 'yup';

const urlValidator = (urlList, url) => {
  const schema = object({
    url: string().url('invalid').notOneOf(urlList, 'duplicate'),
  });

  const result = schema
    .validate({ url }, { abortEarly: false })
    .then(() => 'valid')
    .catch((err) => err.message);

  return result;
};

export default urlValidator;
