import { Delete } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle } from "./ui/card"

type TodoListProps = {
    items: { id: string, text: string }[]
    onRemoveTodo: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
    console.log(props)
    return (
        <div className="my-5">
            {
                props.items.map(todo => <Card key={todo.id}>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>

                            {todo.text}
                        </CardTitle>
                        <Button onClick={() => props.onRemoveTodo(todo.id)} className="w-6 h-6" variant={'destructive'} size={'icon'}><Delete /></Button>
                    </CardHeader>
                </Card>)
            }
        </div>
    )
}

export default TodoList