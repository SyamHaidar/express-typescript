import { DataTypes, Model, Optional, Sequelize } from 'sequelize'

// Define an interface representing a row in your table
interface UserAttributes {
  id: number
  username: string
  email: string
  password: string
}

// Optional attributes for when creating a model instance
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

// Define the User model class
export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number
  public username!: string
  public email!: string
  public password!: string

  // Timestamps
  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  static associate(models: any) {
    // Define associations here
  }
}

// Initialize the model
export default (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(16),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    },
    {
      tableName: 'users',
      timestamps: true, // for createAt and deletedAt
      paranoid: true, // for soft delete (deletedAt)
      sequelize,
    }
  )
  return User
}
