import * as todoController from "../controllers/todoController.js"

const getAllRoute = "/todo"
const findByIdRoute = "/todo/:id/id"
const findByName = "/todo/name"
const postRoute = "/todo"
const deleteRoute = "/todo/:id"
const putRoute = "/todo"

function getAllTodo(app) {
    app.get(getAllRoute, async (req, res) => {
        try {
            const dbResponse = await todoController.getAllTodo()
            res.send(dbResponse)
        } catch (error) {
            res.status(400)
            res.send(error)
        }
    })
}

function findTodoById(app) {
    app.get(findByIdRoute, async (req, res) => {
        try {
            const id = req.params.id;
            const dbResponse = await todoController.findTodoById(id)
            res.send(dbResponse)

        } catch (error) {
            res.status(400)
            res.send(error)
        }
    })
}

function findTodoByName(app) {
    app.get(findByName, async (req, res) => {
        try {
            const name = req.query.name;
            const dbResponse = await todoController.findTodoByName(name)
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
            todoController.create(req.body)
            res.status(200).send({message: "Entity created!"})

        } catch (error) {
            res.status(400)
            res.send(error)
        }
    })
}

function putTodo(app) {
    app.put(putRoute, async (req, res) => {
        try {
            todoController.update(req.body)
            res.status(200).send({message: "Entity updated!"})
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
            todoController.remove(id)
            res.status(204).send()

        } catch (error) {
            res.status(400)
            res.send(error)
        }
    })
}


export default {getAllTodo, postTodo, findTodoById, findTodoByName, deleteTodo, putTodo}
