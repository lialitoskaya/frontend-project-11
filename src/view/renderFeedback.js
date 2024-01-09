const renderFeedback = (elements, status, i18n) => {
  const { feedback } = elements.headerElements;
  const { input } = elements.formElements;

  feedback.textContent = i18n.t(`feedback.${status}`);

  if (status === 'success') {
    input.value = '';
    feedback.classList.remove('text-danger');
    feedback.classList.add('text-success');
    return;
  }
  if (status === 'invalid' || status === 'duplicate') {
    input.classList.add('is-invalid');
  }

  feedback.classList.remove('text-success');
  feedback.classList.add('text-danger');
};
export default renderFeedback;
