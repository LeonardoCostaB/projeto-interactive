const database = require('../db/config')
const Reply = require('../model/reply') 

module.exports = {
  async create(req, res){
    const db = await database()

    const reply = req.body.reply
    const roomId = req.params.room
    const id = req.params.id
    
    const profile = await db.get(`SELECT * FROM profile WHERE id = ${roomId}`)
    
    await Reply.create({
      user: profile.name,
      photo_url: profile.url,
      content: reply,
      score: 0,
      date: Date.now(),
      verification: 1,
      post_id: id,
      room: roomId
    })

    res.redirect(`/room/${roomId}`)
  },

  async secondary(req, res){
    const db = await database()

    const secondary = req.body.replySecondary
    const id = req.params.replyId
    const roomId = req.params.room

    const profile = await db.get(`SELECT * FROM profile WHERE id = ${roomId}`)

    await Reply.create({
      user: profile.name,
      photo_url: profile.url,
      content: secondary,
      score: 0,
      date: Date.now(),
      verification: 2,
      post_id: id,
      room: roomId
    })

    res.redirect(`/room/${roomId}`)
  },

  async update(req, res){
    const id = req.params.id
    const roomId = req.params.room

    const update = {
      content: req.body.updateReply
    }

    await Reply.update(id, update)

    res.redirect(`/room/${roomId}`)
  },

  async delete(req, res){
    const id = req.params.id
    const roomId = req.params.room

    await Reply.delete(id)

    res.redirect(`/room/${roomId}`)
  }
}