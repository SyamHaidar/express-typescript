import fs from 'fs'
import path from 'path'
import { DataTypes, Sequelize } from 'sequelize'
import { sequelize } from '../configs'

const basename = path.basename(__filename)
const db: { [key: string]: any } = {}

// Helper function to recursively load models from nested directories
const loadModels = (dir: string) => {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      loadModels(filePath)
    } else if (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.ts'
    ) {
      const model = require(filePath).default(sequelize, DataTypes)
      db[model.name] = model
    }
  })
}

// Start loading models from the base directory
loadModels(__dirname)

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
