import utils from '../utils/utils.js'

const comments = {
  reply(reply){
    const roomId = document.querySelector('main').dataset.id
    
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

  updateReply(reply){
    utils.update(reply)
  },
  
  deleteReply(reply){
    const roomId = document.querySelector('main').dataset.id
    
    const cancell = document.querySelector('.modal-wrapper .cancell')

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

export default comments