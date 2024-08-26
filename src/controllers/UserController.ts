import { Request, Response } from 'express'
import { UserRequest, UserResponse } from '../dto'
import { User } from '../models/user'
import { UserRepository } from '../repositories'

export default class UserController {
  public static async getAll(req: Request, res: Response) {
    try {
      const users = await User.findAll()
      if (users) {
        const data = await UserResponse.list(users)
        res.status(200).json({ data: data })
      } else {
        res.status(404).json({ message: 'No data found' })
      }
    } catch (error: any) {
      res.status(500).json({ message: `Error: ${error.message}` })
    }
  }

  public static async getById(req: Request, res: Response) {
    try {
      const user = await UserRepository.findById(req.params.id)
      if (user) {
        const data = await UserResponse.detail(user)
        res.status(200).json({ data: data })
      } else {
        res.status(404).json({ message: 'User not found' })
      }
    } catch (error: any) {
      res.status(500).json({ message: `Error: ${error.message}` })
    }
  }

  public static async create(req: Request, res: Response) {
    try {
      const data = await UserRequest.create(req.body)
      res.status(200).json({ data: data })
    } catch (error: any) {
      res.status(500).json({ message: `Error: ${error.message}` })
    }
  }

  public static async deleteById(req: Request, res: Response) {
    try {
      const result = await UserRepository.deleteById(req.params.id)
      if (result) {
        res.status(200).json({ message: 'Success' })
      } else {
        res.status(404).json({ message: 'User not found' })
      }
    } catch (error: any) {
      res.status(500).json({ message: `Error: ${error.message}` })
    }
  }
}
