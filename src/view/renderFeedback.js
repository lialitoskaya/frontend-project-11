import InitElements from '../util/init.js';

const renderFeedback = (status, i18n) => {
  const elements = new InitElements();
  const { feedback } = elements.getHeaderElements();
  const { input } = elements.getFormElements();

  feedback.textContent = i18n.t(`feedback.${status}`);
  console.log(status);
  if (status === 'success') {
    input.value = '';
    input.classList.remove('is-invalid');
    feedback.classList.remove('text-danger');
    feedback.classList.add('text-success');
    return;
  }
  if (status === 'invalid' || status === 'duplicate') {
    feedback.classList.add('text-danger');
    input.classList.add('is-invalid');
    return;
  }
  input.classList.remove('is-invalid');
  feedback.classList.add('text-danger');
};
export default renderFeedback;
