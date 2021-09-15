import todo from './todo.js'
import user from './user.js'

export default (app) => {
  todo.getTodo(app)
  todo.postTodo(app)
  todo.deleteTodo(app)
  todo.putTodo(app)
  user(app)
}

