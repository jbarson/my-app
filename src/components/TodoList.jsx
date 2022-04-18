import { List, Paper } from '@mui/material'
import TodoListItem from './TodoListItem'

function TodoList({ todos, setTodos }) {
  const deleteTodo = id => {
    setTodos(
      todos.filter(item => item.id !== id)
    )
  }
  const toggleCompleteTodo = id => {
    setTodos(prev => {
      return prev.map(todo => {
        console.log(todo)
        if (todo.id === id) {
          todo.complete = !todo.complete
        }
        return todo
      })
    }
    )
  }
  return (
    <Paper style={{ margin: 16 }}>
      <List style={{ overflow: 'scroll' }}>
        {todos.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleCompleteTodo={toggleCompleteTodo}
          />
        ))}
      </List>
    </Paper>
  )
}

export default TodoList