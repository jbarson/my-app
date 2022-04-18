import {
  ListItem,
  Checkbox,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from '@mui/material'
import {DeleteOutlined} from '@mui/icons-material'

function TodoListItem({todo, deleteTodo, toggleCompleteTodo}) {
  const onButtonClick = () => deleteTodo(todo.id)
  const onCheckBoxToggle = () => toggleCompleteTodo(todo.id)
  return (
    <ListItem divider>
    <Checkbox
      onClick={onCheckBoxToggle}
      checked={todo.completed}
      disableRipple
    />
    <ListItemText primary={todo.title} />
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete Todo" onClick={onButtonClick}>
        <DeleteOutlined />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  )
}

export default TodoListItem