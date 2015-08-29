import {Router} from 'express'
import debug from 'debug'

import {doodleRoutes, userRoutes} from './routes'

const log = debug('nodoodles:api')

const api = Router()

api.use('/doodle', doodleRoutes)
api.use('/user', userRoutes)

export default api
