import onChange from 'on-change';
import i18next from 'i18next';
import urlValidator from './validate/validator.js';
import render from './view/render.js';
import ru from './textElements/ru.js';
import en from './textElements/en.js';
import runApp from './view/runApp.js';
import updatePosts from './util/updatePosts.js';
import InitElements from './util/init.js';

const initLng = (lng) => {
  const i18n = i18next.createInstance();
  i18n.init({
    lng,
    resources: { ru, en },
  });
  return i18n;
};

const app = () => {
  const state = {
    lng: '',
    ui: {
      form: {
        state: null,
        urlState: {
          statusKey: '',
        },
      },
      rssElements: {
        feeds: [],
        posts: [],
      },
      seenPosts: [],
    },
    urls: [],
  };

  const i18n = initLng('ru');
  runApp(i18n);

  const watchedState = onChange(state, render(state.ui, i18n));

  const { rssElements } = watchedState.ui;

  const elements = new InitElements();
  const formElements = elements.getFormElements();

  const { form } = elements;
  const { input } = formElements;
  const { urlState } = watchedState.ui.form;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = input.value;
    const { urls } = watchedState;

    urlValidator(urls, url, i18n)
      .then(() => updatePosts(rssElements, url))
      .then(() => {
        urls.push(url);
        urlState.statusKey = 'success';
      })
      .catch((err) => {
        urlState.statusKey = err.message;
      });
  });
};
export default app;
