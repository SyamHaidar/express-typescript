import { User } from '../models/user'

export default class UserRepository {
  public static async findAll() {
    const user = User.findAll({ order: [['createdAt', 'ASC']] })
    console.log(user)
    return user
  }

  public static async findById(userId: string) {
    return await User.findByPk(userId)
  }

  public static async deleteById(userId: string) {
    return await User.destroy({ where: { id: userId } })
  }
}
