import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

type AddTodoProps = {
    onAddTodo: (todoText: string) => void
}

const AddTodo = ({ onAddTodo }: AddTodoProps) => {
    const [text, settext] = useState<string>("");

    const changeEvent = (e: ChangeEvent<HTMLInputElement>) => {
        settext(e.target.value);
    }

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        onAddTodo(text);
        settext("")
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex items-center gap-5">
            <Input onChange={changeEvent} value={text} type="text" placeholder="Write a new todo" className="w-fit" />
            <Button type="submit"> Add Todo</Button>
        </form>
    )
}

export default AddTodo