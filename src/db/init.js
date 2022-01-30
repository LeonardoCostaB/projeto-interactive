const database = require('./config')

const initDb = {
  async init(){
    const db = await database()

    await db.exec(`
    CREATE TABLE profile(
      id INTEGER PRIMARY KEY,
      name TEXT UNIQUE,
      url TEXT,
      pass TEXT
    )
    `)

    await db.exec(`
    CREATE TABLE post(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user TEXT,
      photo_url TEXT,
      content TEXT,
      score INT,
      date DATATIME,
      verification INT,
      room INT
    )
    `)
    
    await db.exec(`
    CREATE TABLE reply(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user TEXT,
      photo_url TEXT,
      content TEXT,
      score INT,
      date DATATIME,
      verification INT,
      post_id INT,
      room INT
    )
    `)

    await db.close()
  },
}

initDb.init()