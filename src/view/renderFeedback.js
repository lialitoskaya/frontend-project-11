import InitElements from '../util/init.js';

const renderFeedback = (value, i18n) => {
  const elements = new InitElements();
  const { feedback } = elements.getHeaderElements();
  const { input } = elements.getFormElements();

  switch (value) {
    case 'invalid':
      feedback.textContent = i18n.t('feedback.invalid');
      input.classList.add('is-invalid');
      feedback.classList.add('text-danger');
      break;
    case 'valid':
      feedback.textContent = i18n.t('feedback.success');
      input.classList.remove('is-invalid');
      feedback.classList.remove('text-danger');
      feedback.classList.add('text-success');
      break;
    case 'duplicate':
      feedback.textContent = i18n.t('feedback.duplicate');
      feedback.classList.add('text-danger');
      input.classList.add('is-invalid');
      break;
    default: {
      console.error(`${i18n.t('feedback.unknow')} ${value}`);
      break;
    }
  }
};
export default renderFeedback;
