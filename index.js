import server from './server'

// =======================
// start the server ======
// =======================
server.listen(server.get('port'), () => {
  console.log(`Listening at port ${server.get('port')}`)
})
