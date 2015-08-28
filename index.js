import debug from 'debug'
import server from './server'

const log = debug('nodoodles:bootstrap')

// =======================
// start the server ======
// =======================
server.listen(server.get('port'), () => {
  log(`Listening at port ${server.get('port')}`)
})
