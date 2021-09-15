import express from 'express'
import expressConfig from './config/expressConfig.js'
import router from './routes/router.js'
import dotenv from "dotenv"


dotenv.config()
const app = express()

const PORT = process.env.PORT
expressConfig(app)
router(app)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
