const renderTextContent = (i18n, elements) => {
  const { headerElements, modalElements, formElements } = elements;

  headerElements.title.innerHTML = i18n.t('header');
  headerElements.description.innerHTML = i18n.t('description');
  headerElements.example.innerHTML = i18n.t('example');
  formElements.input.placeholder = i18n.t('form.inputFormat');
  formElements.label.innerHTML = i18n.t('form.inputFormat');
  formElements.addBtn.innerHTML = i18n.t('form.submit');
  modalElements.buttons.readMore.innerHTML = i18n.t('modal.button.readMore');
  modalElements.buttons.close.innerHTML = i18n.t('modal.button.close');
};
export default renderTextContent;
