const createProfile = document.querySelector('.create-profile')
const close = document.querySelector('.modal-close')
const button = document.querySelector('.form-register button')

createProfile.addEventListener('click', () => {
  document
    .querySelector('.modal-register')
      .classList
        .add('show')

  document.
    querySelector('.register-content')
      .classList
        .add('animate-pop')

  document.
    querySelector('.register-content')
      .classList
        .add('back')
})

close.addEventListener('click', () => {
  document
    .querySelector('.modal-register')
      .classList
        .remove('show')

  document.
    querySelector('.register-content')
      .classList
        .remove('animate-pop')

  document.
    querySelector('.register-content')
      .classList
        .remove('back')
})