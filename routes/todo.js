import * as todoController from "../controllers/todoController.js"

const getRoute = "/todo"
const postRoute = "/todo"
const deleteRoute = "/todo/:id"
const putRoute = "/todo"

function getTodo(app) {
	app.get(getRoute, async (req, res) => {
		try {
			const dbResponse = await todoController.read()
			res.send(dbResponse)
		} catch (error) {
			res.status(400)
			res.send(error)
		}
	})
}

function postTodo(app) {
	app.post(postRoute, async (req, res) => {
		try {
			// Validate request
			// if (!req.body.id) {
			// 	res.status(400).send({ message: "Content can not be empty!" })
			// 	return
			// }

			const dbResponse = todoController.create(req.body)
			res.send(dbResponse)

		} catch (error) {
			res.status(400)
			res.send(error)
		}
	})
}

function putTodo(app) {
	app.put(putRoute, async (req, res) => {
		try {
			const dbResponse = todoController.update(req.body)
			res.send(dbResponse)

		} catch (error) {
			res.status(400)
			res.send(error)
		}
	})
}

function deleteTodo(app) {
	app.delete(deleteRoute, async (req, res) => {
		try {
			const id = req.params.id;
			const dbResponse = todoController.remove(id)
			res.send(dbResponse)

		} catch (error) {
			res.status(400)
			res.send(error)
		}
	})
}



export default { getTodo, postTodo , deleteTodo, putTodo}