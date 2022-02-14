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

const post = {
  postUsers(){
    const post = document.querySelectorAll('.post.users')
    const modal = document.querySelectorAll('.modal-post')
    
    for(let poster of post){
      const id = poster.dataset.id
      const button = poster.querySelector('.reply p')
      
      modal.forEach(modal => {
        const modalId = modal.dataset.id
        const reply = modal.querySelector('#reply-user')
        const submit = modal.querySelector('button')

        if(modalId === id){
          button.onclick = () => {
            modal.classList.toggle('active')
          }

          function state(){
            return utils.stateHandle(reply, submit)
          }
  
          modal.addEventListener("change", state)
          modal.addEventListener('mouseout', state)
        }

      })

      utils.score(poster)
    }
  },

  updatePost(){
    const post = document.querySelectorAll('.post.profile')

    utils.update(post)
  },

  deletePost(){
    const roomId = document.querySelector('main').dataset.id
    
    const cancell = document.querySelector('.modal-wrapper .cancell')

    const post = document.querySelectorAll('.post.profile')
    const deleteForm = document.querySelector('#delete-post')

    for(let poster of post){
      const id = poster.dataset.id
      
      const del = poster.querySelector('.edit-delete .delete button')
      del.onclick = () => {
        document.
          querySelector('body')
            .style = 'overflow: hidden'

        document.
          querySelector('.modal-delete')
            .classList
                .add('show')
          
        deleteForm
          .setAttribute('action', `/delete/${id}/${roomId}`)
        
       
        document.
          querySelector('.modal-wrapper')
            .classList
              .add('animate-pop')
          
        document.
          querySelector('.modal-wrapper')
            .classList
              .add('back')
      }
    }

    cancell.addEventListener('click', () => {
      document
        .querySelector('.modal-delete')
          .classList
            .remove('show')

      document.
        querySelector('.modal-wrapper')
          .classList
            .remove('animate-pop')

      document.
        querySelector('.modal-wrapper')
          .classList
            .remove('back')

      document.
        querySelector('body')
          .style = 'overflow: overflow'

      deleteForm
        .setAttribute('action', `/delete`)
    })
  }, 
}

const comments = {
  reply(){
    const roomId = document.querySelector('main').dataset.id
    
    const reply = document.querySelectorAll('.reply-user')
    const modal = document.querySelectorAll('.modal-reply')

    for(let post of reply){
      const replyId = post.dataset.id
      const button = post.querySelector('.reply p')
      
      modal.forEach(modal => {
        const modalId = modal.dataset.id
        const reply = modal.querySelector('#reply-user')
        const submit = modal.querySelector('button')

        if(modalId === replyId){
          button.onclick = () => {
            modal.classList.toggle('active')
            modal.classList.toggle('width')
            modal.querySelector('form').setAttribute('action', `/replySecondary/${replyId}/${roomId}`)
          }
        }

        function state(){
          return utils.stateHandle(reply, submit)
        }

        modal.addEventListener("change", state)
        modal.addEventListener('mouseout', state)
      })

      utils.score(post)
    }
  },

  updateReply(){
    const reply = document.querySelectorAll('.reply-profile')

    utils.update(reply)
  },
  
  deleteReply(){
    const roomId = document.querySelector('main').dataset.id
    
    const cancell = document.querySelector('.modal-wrapper .cancell')

    const reply = document.querySelectorAll('.reply-profile')
    const deleteForm = document.querySelector('#delete-reply')

    for(let post of reply){
      const id = post.dataset.id
      
      const del = post.querySelector('.edit-delete .delete button')
      del.onclick = () => {
        document.
          querySelector('body')
            .style = 'overflow: hidden'

        document.
          querySelector('.modal-delete')
            .classList
                .add('show')

        document
          .querySelector('.modal-delete .footer button:nth-child(2)')
            .setAttribute('form', 'delete-reply')
        
        deleteForm
          .setAttribute('action', `/delReply/${id}/${roomId}`)
          
        document.
          querySelector('.modal-wrapper')
            .classList
              .add('animate-pop')
          
        document.
          querySelector('.modal-wrapper')
            .classList
              .add('back')
      }
    }

    cancell.addEventListener('click', () => {
      document
        .querySelector('.modal-delete')
          .classList
            .remove('show')

      document.
        querySelector('.modal-wrapper')
          .classList
            .remove('animate-pop')

      document.
        querySelector('.modal-wrapper')
          .classList
            .remove('back')

      document.
        querySelector('body')
          .style = 'overflow: overflow'

      deleteForm
        .setAttribute('action', `/delReply`)

      document
        .querySelector('.modal-delete .footer button:nth-child(2)')
          .setAttribute('form', 'delete-post')
    })
  },
}

const footer = {
  footer(){
    const footer = document.querySelector('footer form #content')
    const button = document.querySelector('footer button')

    button.disabled = true;

    function state(){
      return utils.stateHandle(footer, button)
    } 
   
    footer.addEventListener("change", state)
    footer.addEventListener('mouseout', state)
  }
}

const responsive = {
  responsive(){
    const Body = document.querySelectorAll('body')
    const roomId = document.querySelector('main').dataset.id

    const post = document.querySelectorAll('.post')
    const deletePost = document.querySelector('#delete-post')

    const replyProfile = document.querySelectorAll('.reply-profile')
    const replyUsers = document.querySelectorAll('.reply-user')
    const deleteReply = document.querySelector('#delete-reply')

    const modalReply = document.querySelectorAll('.modal-reply')
    const modalPost = document.querySelectorAll('.modal-post')
    const footer = document.querySelectorAll('.footer-post')

    for(let body of Body){
      const width = body.offsetWidth

      if(width <= 624){   
        post.forEach(post => {
            const id = post.dataset.id
  
            const score = post.querySelector('.score')
            
            const container = document.createElement('div')
            container.setAttribute('class', 'container')
            container.appendChild(score)
            
  
            const editDelete = post.querySelectorAll('.edit-delete')
            editDelete.forEach(editDel => {
              editDel.parentNode.removeChild(editDel)
              
              const div = editDel.cloneNode(true)
  
              const buttonEdit = div.querySelector('.edit button')
              buttonEdit.onclick = () => {
                post
                  .querySelector('.update')
                    .classList.toggle('hidde')
  
                post
                  .querySelector('.content-user')
                    .classList.toggle('hidde')
              }
  
              const buttonDel = div.querySelector('.delete button')
              buttonDel.onclick = () => {
                document.
                  querySelector('body')
                    .style = 'overflow: hidden'
  
                document.
                  querySelector('.modal-delete')
                    .classList
                        .add('show')
                  
                deletePost
                  .setAttribute('action', `/delete/${id}/${roomId}`)
                
              
                document.
                  querySelector('.modal-wrapper')
                    .classList
                      .add('animate-pop')
                  
                document.
                  querySelector('.modal-wrapper')
                    .classList
                      .add('back')
              }
  
              container.appendChild(div)
            })

            const reply = post.querySelectorAll('.reply')
            reply.forEach(reply => {
              reply.parentNode.removeChild(reply)

              const resClone = reply.cloneNode(true)
              
              modalPost.forEach(modal => {
                const modalId = modal.dataset.id
        
                if(modalId === id){
                  resClone.onclick = () => {
                    modal.classList.toggle('active')
                  }
                }
              })

              container.appendChild(resClone)
            })
            
            post.appendChild(container)
        })

        replyProfile.forEach(reply => {
          const id = reply.dataset.id
  
          const score = reply.querySelector('.score')
          
          const container = document.createElement('div')
          container.setAttribute('class', 'container')
          container.appendChild(score)
          

          const editDelete = reply.querySelectorAll('.edit-delete')
          editDelete.forEach(editDel => {
            editDel.parentNode.removeChild(editDel)
            
            const div = editDel.cloneNode(true)

            const buttonEdit = div.querySelector('.edit button')
            buttonEdit.onclick = () => {
              reply
                .querySelector('.update')
                  .classList.toggle('hidde')

              reply
                .querySelector('.content-user')
                  .classList.toggle('hidde')
            }

            const buttonDel = div.querySelector('.delete button')
            buttonDel.onclick = () => {
              document.
                querySelector('body')
                  .style = 'overflow: hidden'

              document.
                querySelector('.modal-delete')
                  .classList
                      .add('show')

              document.
                querySelector('.modal-delete .footer button:nth-child(2)')
                  .setAttribute('form', 'delete-reply')
                
              deleteReply
                .setAttribute('action', `/delReply/${id}/${roomId}`)
              
            
              document.
                querySelector('.modal-wrapper')
                  .classList
                    .add('animate-pop')
                
              document.
                querySelector('.modal-wrapper')
                  .classList
                    .add('back')
            }

            container.appendChild(div)
          })

          reply.appendChild(container)
        })

        replyUsers.forEach(reply => {
          const replyId = reply.dataset.id

          const score = reply.querySelector('.score')
          
          const container = document.createElement('div')
          container.setAttribute('class', 'container')
          container.appendChild(score)

          const res = reply.querySelectorAll('.reply')
          res.forEach(res => {
            res.parentNode.removeChild(res)

            const resClone = res.cloneNode(true)

            modalReply.forEach(modal => {
              const modalId = modal.dataset.id
      
              if(modalId === replyId){
                resClone.onclick = () => {
                  modal.classList.toggle('active')
                  modal.classList.toggle('width')
                  modal.querySelector('form').setAttribute('action', `/replySecondary/${replyId}/${roomId}`)
                }
              }
            })

            container.appendChild(resClone)
          })

          reply.appendChild(container)
        })

        modalReply.forEach(modal => {
          utils.container(modal)
        })

        modalPost.forEach(modal => {
          utils.container(modal)
        })

        footer.forEach(footer => {
          utils.container(footer)
        })
      } 
      
    } 
  }
}

const init = {
  init(){
    post.postUsers()
    post.updatePost()
    post.deletePost()
    
    comments.reply()
    comments.deleteReply()
    comments.updateReply()

    footer.footer()

    responsive.responsive()
  }
}
  
init.init()