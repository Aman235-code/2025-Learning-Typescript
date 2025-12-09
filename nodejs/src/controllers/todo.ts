import type { RequestHandler } from "express"
import { Todo } from "../models/todo.js"

const TODO : Todo[] = []

export const createTodo: RequestHandler =(req, res)=>{
    // const text = (req.body as{text: string}).text
    const text = (<{text:string}>req.body).text

    const newTodo = new Todo(Math.random().toString(), text)

    TODO.push(newTodo)

    res.status(201).json({message:"Todo created", newTodo})
}

export const getTodo : RequestHandler = (req, res) => {
    return res.status(200).json(TODO)
}

export const updateTodo : RequestHandler<{todoId: string}> = (req, res) => {
    const todoId = req.params.todoId
    const text = (req.body as {text:string}).text

    const todoIndex = TODO.findIndex((todo)=> todo.id === todoId)
    if(todoIndex < 0){
        throw new Error('Todo Not Found')
    }

    TODO[todoIndex] = new Todo(TODO[todoIndex].id, text)
    res.status(200).json({message:"Todo Updated", newTodo: TODO[todoIndex]})
}

export const deleteTodo : RequestHandler<{todoId: string}> = (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = TODO.findIndex((todo)=> todo.id === todoId)

    if(todoIndex < 0){
        throw new Error('Todo Not Found')
    }

    TODO.splice(todoIndex, 1);
    res.status(200).json({message:"Deleted"})
}