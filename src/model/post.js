const database = require('../db/config')

module.exports = {
  async get(){
    const db = await database()

    const data = await db.all(`SELECT * FROM post`)

    db.close()

    return data
  },

  async create(newPost){
    const db = await database()

    await db.run(`
      INSERT INTO post(
        user,
        photo_url,
        content,
        score,
        date,
        verification,
        room)
      VALUES(
        "${newPost.user}",
        "${newPost.photo_url}",
        "${newPost.content}", 
        ${newPost.score}, 
        ${newPost.date},
        ${newPost.verification},
        ${newPost.room})
    `)

    await db.close()
  },

  async score(id, scoreUpdate){
    const db = await database()

    db.run(`UPDATE post SET score = ${scoreUpdate.score} WHERE id = ${id}`)

    await db.close()
  },

  async update(id, updatePost){
    const db = await database()

    db.run(`
      UPDATE post SET 
      content = "${updatePost.content}" 
      WHERE id = ${id}
    `)

    await db.close()
  },

  async delete(postId){
    const db = await database()

    await db.run(`DELETE FROM post WHERE id = ${postId}`)

    await db.close()
  }
}