import * as todoService from "../services/todoDBService.js"
import log from "../utils/logger.js"

function create(entity) {
	try {
		todoService.createToDo(entity)
	} catch (error) {
		log.error(error)
	}
}

async function read() {
	try {
		return await todoService.getTodos()
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

export { create, read, update, remove }
