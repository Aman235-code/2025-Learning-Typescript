import express from "express"
import todoRoutes from "./routes/todo.js"
import bodyParser from "body-parser";

const app = express();
const PORT = 8080

app.use(bodyParser.json())
app.use("/todo", todoRoutes)

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction)=>{
    res.status(500).json({
        message: err.message
    })
})

app.listen(PORT, ()=>{
    console.log(`Server listening ${PORT}`)
})