const database = require('../db/config')

module.exports = {
  async create(newReply){
    const db = await database()

    await db.run(`
      INSERT INTO reply(
        user,
        photo_url,
        content,
        score,
        date,
        verification,
        post_id,
        room)
      VALUES(
        "${newReply.user}",
        "${newReply.photo_url}",
        "${newReply.content}", 
        ${newReply.score}, 
        ${newReply.date},
        ${newReply.verification},
        ${newReply.post_id},
        ${newReply.room})
    `)

    await db.close()
  },

  async update(id, updateReply){
    const db = await database()

    db.run(`
    UPDATE reply SET 
    content = "${updateReply.content}" 
    WHERE id = ${id}
    `)

    await db.close()
  },

  async delete(postId){
    const db = await database()

    await db.run(`DELETE FROM reply WHERE id = ${postId}`)

    await db.close()
  }
}