import * as todoService from "../services/todoDBService.js"
import log from "../utils/logger.js"

function create(entity) {
    try {
        todoService.createToDo(entity)
    } catch (error) {
        log.error(error)
    }
}

async function getAllTodo() {
    try {
        return await todoService.getAllTodo()
    } catch (error) {
        log.error(error)
    }
}

async function findTodoById(id) {
    try {
        return await todoService.findToDoById(id)
    } catch (error) {
        log.error(error)
    }
}

async function findTodoByName(name) {
    try {
        return await todoService.findToDoByName(name)
    } catch (error) {
        log.error(error)
    }
}


function update(entity) {
    try {
        return todoService.updateToDo(entity)
    } catch (error) {
        log.error(error)
    }
}

function remove(id) {
    try {
        todoService.removeToDo(id)
    } catch (error) {
        log.error(error)
    }
}

export {create, getAllTodo, findTodoById, findTodoByName, update, remove}
