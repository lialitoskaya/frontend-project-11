class InitElements {
  constructor() {
    this.form = document.querySelector('.rss-form');
    this.headerContent = this.form.parentElement;
    this.modalContent = document.querySelector(
      '.modal > .modal-dialog > .modal-content',
    );
  }

  getHeaderElements() {
    const title = this.headerContent.querySelector('h1');
    const description = this.headerContent.querySelector('.lead');
    const feedback = this.headerContent.querySelector('.feedback');
    const example = this.headerContent.querySelector('.text-muted');
    return {
      title,
      description,
      feedback,
      example,
    };
  }

  getFormElements() {
    return {
      input: this.form.querySelector('#url-input'),
      label: this.form.querySelector('label[for="url-input"]'),
      addBtn: this.form.querySelector('[aria-label="add"]'),
    };
  }

  getModalElements() {
    const title = this.modalContent.querySelector('.modal-title');
    const body = this.modalContent.querySelector('.modal-body');
    const buttons = {
      readMore: this.modalContent.querySelector('.modal-footer > a'),
      close: this.modalContent.querySelector(
        ".modal-footer > [data-bs-dismiss='modal']",
      ),
    };
    return { title, body, buttons };
  }
}

export default InitElements;
