import utils from '../utils/utils.js'

export default function footer() {
  const footer = document.querySelector('footer form #content')
  const button = document.querySelector('footer button')

  button.disabled = true;

  const state = () => {
    return utils.stateHandle(footer, button)
  } 
  
  footer.addEventListener("change", state)
  footer.addEventListener('mouseout', state)
}