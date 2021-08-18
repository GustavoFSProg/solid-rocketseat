import Router from 'express'
import { createUserController } from './useCases/CreateUser'

const routes = Router()

routes.get('/', (request, response) => {
  return createUserController.handle(request, response)
})

export default routes
