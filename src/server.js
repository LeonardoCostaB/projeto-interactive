const express = require('express')
const router = require('./router')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))

server.use(router)

server.listen(4500, () => console.log('Rodando'))