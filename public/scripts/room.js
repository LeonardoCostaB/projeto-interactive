import post from './partials/post.js'
import comments from './partials/comments.js'
import footer from './partials/footer.js'

const postWeb = document.querySelectorAll('.post.users')
const postMobile = document.querySelectorAll('.post-mobile.users')

const postProfileWeb = document.querySelectorAll('.post.profile')
const postProfileMobile = document.querySelectorAll('.post-mobile.profile')


const reply = document.querySelectorAll('.reply-user')
const replyMobile = document.querySelectorAll('.reply-user-mobile')

const replyProfile = document.querySelectorAll('.reply-profile')
const replyProfileMobile = document.querySelectorAll('.reply-profile-mobile')

const init = {
  init(){
    post.postUsers(postWeb)
    post.postUsers(postMobile)

    post.updatePost(postProfileWeb)
    post.updatePost(postProfileMobile)

    post.deletePost(postProfileWeb)
    post.deletePost(postProfileMobile)
    
    comments.reply(reply)
    comments.reply(replyMobile)

    comments.deleteReply(replyProfile)
    comments.deleteReply(replyProfileMobile)

    comments.updateReply(replyProfile)
    comments.updateReply(replyProfileMobile)

    footer()
  }
}
  
init.init()