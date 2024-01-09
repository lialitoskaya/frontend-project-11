import onChange from 'on-change';
import i18next from 'i18next';
import urlValidator from './validate/validator.js';
import render from './view/render.js';
import ru from './textElements/ru.js';
import en from './textElements/en.js';
import renderTextContent from './view/renderTextContent.js';
import updatePosts from './util/updatePosts.js';

const app = () => {
  const state = {
    lng: 'ru',
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

  const elements = {
    headerElements: {
      title: document
        .querySelector('.rss-form')
        .parentElement.querySelector('h1'),
      description: document
        .querySelector('.rss-form')
        .parentElement.querySelector('.lead'),
      feedback: document
        .querySelector('.rss-form')
        .parentElement.querySelector('.feedback'),
      example: document
        .querySelector('.rss-form')
        .parentElement.querySelector('.text-muted'),
    },
    formElements: {
      form: document.querySelector('.rss-form'),
      input: document.querySelector('.rss-form #url-input'),
      label: document.querySelector('.rss-form label[for="url-input"]'),
      addBtn: document.querySelector('.rss-form [aria-label="add"]'),
    },
    modalElements: {
      title: document.querySelector('.modal .modal-title'),
      body: document.querySelector('.modal .modal-body'),
      buttons: {
        readMore: document.querySelector('.modal-footer a'),
        close: document.querySelector(
          ".modal-footer [data-bs-dismiss='modal']",
        ),
      },
    },
  };

  const { lng } = state;
  const i18n = i18next.createInstance();
  i18n
    .init({
      lng,
      resources: { ru, en },
    })
    .then(() => renderTextContent(i18n, elements));

  const watchedState = onChange(state, render(elements, state.ui, i18n));

  const {
    rssElements,
    form: { urlState },
  } = watchedState.ui;

  const { input, form } = elements.formElements;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = input.value;
    const { urls } = watchedState;
    urlState.state = 'filled';

    urlValidator(urls, url)
      .then(() => updatePosts(rssElements, url))
      .then(() => {
        urls.push(url);
        urlState.statusKey = 'success';
      })
      .catch((err) => {
        urlState.statusKey = err.message;
      })
      .then(() => {
        urlState.statusKey = '';
        urlState.state = 'done';
      });
  });
};
export default app;
