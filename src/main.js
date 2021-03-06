//Express e Socket IO config
const express = require('express')
const webApp = express()
const webServer = require('http').createServer(webApp)


//Print server working 
webServer.listen(3000, function () {
  console.log('> Server Working...')
});

//Send files to client
const {SendFiles} = require('./scripts/SendFiles.js')
SendFiles(webApp,__dirname)

//Create Server Object
const {Server} = require('./systems/Server.js')
const server = new Server


io.on('connection', (socket) => {
    server.SocketIO(socket)
})

// exports.users = server.userSystem.users
exports.users = server.userSystem.users
exports.games = server.gameSystem.games