const express = require('express')

const profileController = require('./controller/profileController')
const postController = require('./controller/postController')
const replyController = require('./controller/replyController')
const dashboardController = require('./controller/dashboardController')

const router = express.Router()

router.get('/login', profileController.index)


// Route page login
router.post('/nameLogin/passLogin', profileController.login)
router.post('/name/photoUrl/pass', profileController.profile)

// Inicialização da pag
router.get('/room/:room', dashboardController.index)

// Route page room/post
router.post('/content/:room/:id', postController.create)
router.post('/update/:id/:room', postController.update)
router.post('/delete/:id/:room', postController.delete)

// Route page room/reply
router.post('/reply/:id/:room/', replyController.create)
router.post('/replySecondary/:replyId/:room', replyController.secondary)
router.post('/updateReply/:id/:room', replyController.update)
router.post('/delReply/:id/:room', replyController.delete)

module.exports = router