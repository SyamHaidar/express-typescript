import { User } from '../models/user'
import { Helper } from '../utils'

export default async function seeder() {
  await UserSeeder()
}

async function UserSeeder() {
  const data = await User.findAll()
  if (data.length === 0) {
    await User.create({
      email: 'john@email.com',
      username: 'johndoe',
      password: Helper.hashPassword('password'),
    })
  }
}
