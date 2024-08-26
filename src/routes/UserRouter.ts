import express from 'express'
import { UserController } from '../controllers'

const UserRouter = express.Router()

UserRouter.get('/', UserController.getAll)
UserRouter.get('/:id', UserController.getById)
UserRouter.post('/', UserController.create)
UserRouter.delete('/:id', UserController.deleteById)

export default UserRouter
