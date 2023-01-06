/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
/* eslint-disable node/no-unsupported-features/es-syntax */

export const hideAlert = () => {
  const el = document.querySelector('.alert');
  if (el) el.parentElement.removeChild(el);
};

export const showAlert = (type, msg) => {
  hideAlert();

  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(() => {
    document.querySelector('.alert').remove();
  }, 5000);
};
