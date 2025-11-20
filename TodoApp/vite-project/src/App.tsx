
import { useState } from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import type { Todo } from "./types/todo";

function App() {

  const [todos, settodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const id = Math.random().toString();
    settodos([...todos, { id, text }])
  }
  const removeTodoHandler = (todoId: string) => {
    const newTodo = todos.filter((todo: Todo) => {
      return todo.id !== todoId
    })
    settodos(newTodo)
  }
  return (
    <main className="max-w-6xl mx-auto mx-5">
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onRemoveTodo={removeTodoHandler} />
    </main>
  )
}

export default App
