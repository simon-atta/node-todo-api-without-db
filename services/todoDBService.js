import { data } from "../data/todoData.js"

function getTodos() {
	return new Promise((resolve, reject) => {
		setTimeout(resolve(data), 1000)
	})
}

function createToDo(entity) {
	data.push(entity)
}

function updateToDo(entity) {

  var index = data.findIndex(function (o) {
		return o.id === parseInt(entity.id)
	})

  var oldEntity = data.pop(index);

  oldEntity.id = entity.id;
  oldEntity.name = entity.name;
  oldEntity.status = entity.status;

	data.push(oldEntity)
}

function removeToDo(id) {
	var index = data.findIndex(function (o) {
		return o.id === parseInt(id)
	})


	if (index !== -1) data.splice(index, 1)
}

export { getTodos, createToDo, removeToDo , updateToDo}
