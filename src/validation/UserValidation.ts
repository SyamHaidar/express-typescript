interface CreateRequestProps {
  username: string
  email: string
  password: string
}

export default class UserValidation {
  public static createRequest(req: CreateRequestProps): void {
    const requestFields = [
      { field: req.username, message: 'Username is required.' },
      { field: req.email, message: 'Email is required.' },
      { field: req.password, message: 'Password is required.' },
    ]

    requestFields.forEach((item) => {
      if (!item.field) {
        throw new Error(item.message)
      }
    })
  }
}
