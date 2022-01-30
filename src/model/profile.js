const database = require('../db/config')

module.exports = {
  async get(){
    const db = await database()

    const data = await db.get(`SELECT * FROM profile`)

    await db.close()

    return data
  },

  async create(newProfile){
    const db = await database()

    await db.run(`
      INSERT INTO profile(
        id,
        name, 
        url,
        pass)
      VALUES(
        ${newProfile.id},
        "${newProfile.name}", 
        "${newProfile.url}", 
        "${newProfile.pass}")
    `)

    await db.close()
  }
}