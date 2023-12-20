import InitElements from '../util/init.js';

const renderForm = (state) => {
  const elements = new InitElements();
  const { input, addBtn } = elements.getFormElements();
  const { feedback } = elements.getHeaderElements();
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
      input.value = '';
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
