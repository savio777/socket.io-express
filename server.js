// carregar modulos do servidor e criar servidor
const express = require('express')()
const app = express()
const http = require('http').createServer(app)

// carregar modulo do IO para o servidor e cliente se comunicarem ao mesmo tempo
const io = require('socket.io')(http)

// abrir site raiz
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// escutar servidor para receber feedback
http.listen(3000, () => {
    console.log('servidor rodando em localhost:3000')
})