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
    uiFormState: {
      urlState: null,
      urls: [],
      modal: {
        mode: '',
      },
    },
    rssElements: {
      feeds: [],
      posts: [],
    },
  };

  const i18n = initLng('ru');
  runApp(i18n);

  const watchedState = onChange(state, render(state.rssElements, i18n));

  const { rssElements } = watchedState;

  const elements = new InitElements();
  const formElements = elements.getFormElements();
  const modal = elements.getModalElements();

  const { form } = elements;
  const { input } = formElements;
  const modalCloseBtn = modal.buttons.close;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = input.value;
    const { urls } = watchedState.uiFormState;

    urlValidator(urls, url).then((result) => {
      watchedState.uiFormState.urlState = result;
      if (result === 'valid') {
        urls.push(url);
        updatePosts(rssElements, url);
      }
    });
  });

  modalCloseBtn.addEventListener('click', () => {
    watchedState.uiFormState.modal.mode = 'close';
  });
};
export default app;
