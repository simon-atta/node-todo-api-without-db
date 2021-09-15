import * as userController from '../controllers/userController.js'

const route = '/user'

export default (app) => {
  app.get(route, async (req, res) => {
    try {
      const dbResponse = await userController.read()
      res.send(dbResponse)
    } catch (error) {
      res.status(400)
      res.send(error)
    }
  })
}
