import { v4 as uuid } from 'uuid'
import {
  TextField,
  Button,
  Paper,
  Grid
} from '@mui/material'

function AddTodo({ setTodos, todos }) {
  const handleSubmit = e => {
    e.preventDefault()
    if (!e.target.todoTitle.value) return
    setTodos([...todos,
    {
      title: e.target.todoTitle.value,
      id: uuid(),
      complete: false
    }])
    e.target.reset()
  }
  return (
    <form onSubmit={handleSubmit}>
      <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
          <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
            <TextField
              placeholder="Add Todo here"
              fullWidth
              name="todoTitle"
            />
          </Grid>
          <Grid xs={2} md={1} item>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              type="submit"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  )
}

export default AddTodo