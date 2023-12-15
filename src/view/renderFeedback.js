import InitElements from '../util/init.js';

const renderFeedback = (urlState, i18n) => {
  const elements = new InitElements();
  const { feedback } = elements.getHeaderElements();
  const { input } = elements.getFormElements();

  feedback.textContent = i18n.t(urlState.i18nKey);

  switch (urlState.valid) {
    case false:
      input.classList.add('is-invalid');
      feedback.classList.add('text-danger');
      break;
    case true:
      input.value = '';
      input.classList.remove('is-invalid');
      feedback.classList.remove('text-danger');
      feedback.classList.add('text-success');
      break;
    default: {
      console.error(`${i18n.t('feedback.unknow')}`);
      break;
    }
  }
};
export default renderFeedback;
