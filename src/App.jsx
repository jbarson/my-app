import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList.jsx';
import {
  Paper,
  AppBar,
  Toolbar,
  Typography
} from '@mui/material'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Make Todo List',
      complete: false
    }
  ])
  return (
    <Paper
      elevation={0}
      style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}
    >
      <AppBar color="primary" position="static" style={{ height: 64 }}>
        <Toolbar style={{ height: 64 }}>
          <Typography color="inherit">TODO APP</Typography>
        </Toolbar>
      </AppBar>
      <AddTodo setTodos={setTodos} todos={todos} />
      <TodoList setTodos={setTodos} todos={todos} />
    </Paper>
  );
}

export default App;
