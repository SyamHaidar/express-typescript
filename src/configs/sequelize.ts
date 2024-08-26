import { Sequelize } from 'sequelize'
import database from './database'

const config = database['development']

const sequelize = new Sequelize({
  database: config.database,
  username: config.username,
  password: config.password,
  host: config.host,
  dialect: config.dialect as any,
  logging: config.logging,
})

export default sequelize
