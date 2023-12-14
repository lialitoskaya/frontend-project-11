import InitElements from '../util/init.js';

const runApp = (i18n) => {
  const elements = new InitElements();
  const header = elements.getHeaderElements();
  const modal = elements.getModalElements();
  const formElements = elements.getFormElements();

  header.title.innerHTML = i18n.t('header');
  header.description.innerHTML = i18n.t('description');
  formElements.input.placeholder = i18n.t('form.inputFormat');
  formElements.label.innerHTML = i18n.t('form.inputFormat');
  formElements.addBtn.innerHTML = i18n.t('form.submit');
  header.example.innerHTML = i18n.t('example');
  modal.buttons.readMore.innerHTML = i18n.t('modal.button.readMore');
  modal.buttons.close.innerHTML = i18n.t('modal.button.close');
};
export default runApp;
