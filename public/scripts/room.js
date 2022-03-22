import post from './partials/post.js'
import comments from './partials/comments.js'
import footer from './partials/footer.js'

const init = {
  init(){
    post.postUsers()
    post.updatePost()
    post.deletePost()
    
    comments.reply()
    comments.deleteReply()
    comments.updateReply()

    footer()
  }
}
  
init.init()