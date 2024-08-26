import { User } from '../../models/user'
import { Helper } from '../../utils'
import { UserValidation } from '../../validation'

interface UserCreateRequestProps {
  username: string
  email: string
  password: string
}

export default class UserRequest {
  public static async create(req: UserCreateRequestProps) {
    UserValidation.createRequest(req) // validation

    const user = await User.create({
      email: req.email,
      username: req.username,
      password: Helper.hashPassword(req.password),
    })

    return user
  }
}
