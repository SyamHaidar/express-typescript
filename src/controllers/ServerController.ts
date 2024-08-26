import { Request, Response } from 'express'

export default class ServerController {
  public static async index(req: Request, res: Response) {
    try {
      res.status(200).send('Server running')
    } catch (error: any) {
      res.status(500).send(`Server error: ${error.message}`)
    }
  }
}
