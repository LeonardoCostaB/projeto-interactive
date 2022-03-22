const utils = {
  score(post){
    let cart = JSON.parse(localStorage.getItem('score')) || []

    const scoreUp = post.querySelector('.score img[src="/images/icons/icon-plus.svg"]')
    const scorePop = post.querySelector('.score img[src="/images/icons/icon-minus.svg"]')
    const scoreValue = post.querySelector('.score-value')
    scoreValue.innerHTML = cart.length

    scoreUp.onclick = () => {
      cart.push(+1)
      localStorage.setItem('score', JSON.stringify(cart))
      scoreValue.innerHTML = cart.length
    }

    scorePop.onclick = () => {
      cart.length -= 1
      localStorage.setItem('score', JSON.stringify(cart))
      scoreValue.innerHTML = cart.length

    }
  },

  container(div){
    const img = div.querySelector('.image')
    const button = div.querySelector('button')

    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    container.appendChild(img)
    container.appendChild(button)

    div.appendChild(container)
  },

  update(div){
    div.forEach(div => {
      const button = div.querySelector('.edit-delete .edit button')
      
      button.addEventListener('click', () => {
        div
          .querySelector('.update')
            .classList.toggle('hidde')

        div
          .querySelector('.content-user')
            .classList.toggle('hidde')
      })
      
    })
  },

  stateHandle(div, button) {
    if (div.value == 0) {
      button.disabled = true
      button.classList.add('disabled')
    } else {
      button.disabled = false;
      button.classList.remove('disabled')
    }
  }
}

export default utils