const database = require('../db/config')
const Profile = require('../model/profile')

module.exports = {
  index(req, res){
    res.render('login')
  },

  async login(req, res){
    const db = await database()

    const name = req.body.nameLogin
    const pass = req.body.passLogin 
    
    const profile = await db.all(`SELECT * FROM profile`)
    const room = await db.get(`SELECT * FROM profile WHERE name = '${name}'` )

    const verified = profile.some(profile => profile.pass === pass) && profile.some(profile => profile.name === name)

    try {
      if(name.trim() === "" && pass.trim() === "") throw ('Digite o seu nome e sua senha')
    } catch (error) {
      res.send(error)
    }

    if(!verified){
      res.send('Senha ou nome de usuário incorreto')
    } 

    await db.close()

    res.redirect(`/room/${room.id}`)
  },

  async profile(req, res){
    const db = await database()

    const name = req.body.name
    const url = req.body.photoUrl
    const pass = req.body.pass

    let roomId

    const pf = await db.all(`SELECT * FROM profile`)
    
    const userCheck = /^[a-z][a-z]\w+\d*$|^[a-z]\d\d+$/i;
    const passCheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    try {
      if(name.trim() === "" && url.trim() === "" && pass.trim() === "") throw ('Você precisa preencher todos os campos')

      if(name.trim() === "") throw ('Preencha seu nome')
      if(userCheck.test(name) === false) throw ('Nome de usuário inválido')
      if(pf.some(a => a.name === name)) throw ('Nome de usuario já existe')

      if(url.trim() === "") throw ('Precisamos de uma foto para completar seu cadastro')

      if(pass.trim() === "") throw ('Senha inválida') 
      if(passCheck.test(pass) === false) throw ('Sua senha é fraca ou não corresponde ao nossos termos')

    } catch (error) {
      res.send(error)
    }

    for(let i = 0; i < 6; i++) {      
      i == 0 ? roomId = Math.floor(Math.random() * 10).toString() : roomId += Math.floor(Math.random() * 10).toString()
    }

    const verifiedRoom = await db.all('SELECT id FROM profile')
    const isRoom = verifiedRoom.some(verifiedRoom => verifiedRoom === roomId)

    if(!isRoom){
      await Profile.create({
        id: roomId,
        name: name,
        url: url,
        pass: pass
      })  
    }

    await db.close()
      
    res.redirect(`/room/${roomId}`)

  },
}