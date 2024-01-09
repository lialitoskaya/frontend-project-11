const renderForm = (elements, state) => {
  const { input, addBtn } = elements.formElements;
  const { feedback } = elements.headerElements;
  switch (state) {
    case 'filled': {
      feedback.textContent = '';
      feedback.classList.remove('text-danger', 'text-success');
      input.classList.remove('is-invalid');
      input.setAttribute('readonly', true);
      addBtn.setAttribute('disabled', true);
      break;
    }
    case 'done': {
      input.removeAttribute('readonly');
      addBtn.removeAttribute('disabled');
      break;
    }
    default: {
      throw new Error('Error render form');
    }
  }
};
export default renderForm;
