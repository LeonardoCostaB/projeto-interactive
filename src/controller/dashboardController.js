const database = require('../db/config')
const Post = require('../model/post') 
const postUtils = require('../utils/postUtils')

module.exports = {
  async index(req, res){
    const db = await database()
    const post = await Post.get()

    const roomId = req.params.room

    const profile = await db.get(`SELECT * FROM profile WHERE id = ${roomId}`)
    const reply = await db.all(`SELECT * FROM reply WHERE verification = 1`)
    const secondary = await db.all(`SELECT * FROM reply WHERE verification = 2`)

    const updatePost = post.map(post => {
      const remaining = postUtils.remainingDays(post)

      return {...post, remaining}
    })

    const updateReply = reply.map(reply => {
      const remaining = postUtils.remainingDays(reply)

      return {...reply, remaining}
    })

    const updateSecondary = secondary.map(secondary => {
      const remaining = postUtils.remainingDays(secondary)

      return {...secondary, remaining}
    })

    const section = [...updatePost].reverse()

    await db.close()

    res.render('room', {post: section, reply: updateReply, secondary: updateSecondary, profile: profile, roomId: roomId})
  },
}