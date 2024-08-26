import { User } from '../../models/user'

export interface UserListResponseProps {
  username: string
  email: string
}

export interface UserDetailResponseProps {
  id: number
  username: string
  email: string
}

export default class UserResponse {
  public static async list(users: User[]) {
    const result: UserListResponseProps[] = users.map((user) => ({
      username: user.username ?? '',
      email: user.email ?? '',
    }))
    return result
  }

  public static async detail(user: User) {
    const result: UserDetailResponseProps = {
      id: user.id ?? '',
      username: user.username ?? '',
      email: user.email ?? '',
    }
    return result
  }
}
