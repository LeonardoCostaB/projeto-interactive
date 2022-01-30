const database = require('../db/config')
const Post = require('../model/post') 

module.exports = {
  async create(req, res){
    const db = await database()

    const roomId = req.params.room
    const post = req.body.content

    const profile = await db.get(`SELECT * FROM profile WHERE id = ${roomId}`)
      
    await Post.create({
      user: profile.name,
      photo_url: profile.url,
      content: post,
      score: 0,
      date: Date.now(),
      verification: 0,
      room: roomId
    })

    res.redirect(`/room/${roomId}`)
  },

  async update(req, res){
    const id = req.params.id
    const roomId = req.params.room

    const update = {
      content: req.body.update
    }

    await Post.update(id, update)

    res.redirect(`/room/${roomId}`)
  },

  async delete(req, res){
    const id = req.params.id
    const roomId = req.params.room

    await Post.delete(id)

    res.redirect(`/room/${roomId}`)
  }
}