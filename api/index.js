import {Router} from 'express'

import {doodleRoutes, userRoutes} from './routes'

const api = Router()

api.use('/doodle', doodleRoutes)
api.use('/user', userRoutes)

export default api
