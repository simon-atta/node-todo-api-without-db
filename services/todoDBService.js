import {data} from "../data/todoData.js"

function getAllTodo() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve(data), 1000)
    })
}

function createToDo(entity) {
    data.push(entity)
}

function updateToDo(entity) {
    const oldEntity = data.find(function (e) {
        return e.id === parseInt(entity.id)
    });

    let newEntity = oldEntity;

    newEntity.id = entity.id;
    newEntity.name = entity.name;
    newEntity.status = entity.status;

    removeToDo(oldEntity.id)
    data.push(newEntity)

}

function findToDoById(id) {
    let result = data.filter(o => {
        return o.id === parseInt(id)
    })

    return new Promise((resolve, reject) => {
        setTimeout(resolve(result), 1000)
    })
}

function findToDoByName(name) {
    let result = data.filter(o => {
        return o.name === name
    })

    return new Promise((resolve, reject) => {
        setTimeout(resolve(result), 1000)
    })
}


function removeToDo(id) {
    let index = data.findIndex(function (o) {
        return o.id === parseInt(id)
    })


    if (index !== -1) data.splice(index, 1)
}

export {getAllTodo, createToDo, findToDoById, findToDoByName, removeToDo, updateToDo}
