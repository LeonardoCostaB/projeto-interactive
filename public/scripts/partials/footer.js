import utils from '../utils/utils.js'

export default function footer() {
  const footer = document.querySelector('footer form #content')
  const button = document.querySelector('footer button')
  const buttonMobile = document.querySelector('footer .container-footer button')

  button.disabled = true;

  const state = () => {
    return utils.stateHandle(footer, button)
  } 

  const stateMobile = () => {
    return utils.stateHandle(footer, buttonMobile)
  }
  
  footer.addEventListener("change", state)
  footer.addEventListener('mouseout', state)

  footer.addEventListener("change", stateMobile)
  footer.addEventListener('mouseout', stateMobile)
}