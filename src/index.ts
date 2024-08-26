import dotenv from 'dotenv'
import express, { Application } from 'express'
import { cors, seeder, sequelize } from './configs'
import { ServerController } from './controllers'
import db from './models'
import router from './routes'

// setup
dotenv.config()
const app: Application = express()
const port: number = Number(process.env.DB_PORT) || 8080
const host: string = process.env.DB_HOST || 'localhost'

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors)

// router
app.use('/api', router)
app.get('/', ServerController.index)

// checking connection
app.listen(port, host, () => {
  console.log(`[server] Running at ${host + ':' + port}`)
})

// synchronize database update method
sequelize.authenticate().then(async () => {
  try {
    db.sequelize.sync()
    await seeder()
  } catch (error: any) {
    console.log(`[server] Error when synchronized: ${error}`)
  } finally {
    console.log('[server] Application start')
  }
})
