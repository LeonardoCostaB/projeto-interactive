import utils from '../utils/utils.js'

const post = {
  postUsers(post) {
    const modal = document.querySelectorAll('.modal-post')
    // const post = document.querySelector('.post.profile')
    
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

  updatePost(post) {
    utils.update(post)
  },

  deletePost(post) {
    const roomId = document.querySelector('main').dataset.id
    
    const cancell = document.querySelector('.modal-wrapper .cancell')

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

export default post