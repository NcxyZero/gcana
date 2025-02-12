import express, {Request, Response} from "express"

const app = express()
app.use(express.json())

app.post("/saveData", (req: Request, res: Response) => {
    let body = req.body
    let header = req.headers
    let auth = header.authorization
    if (!auth || !auth.startsWith("TEST")) {
        res.status(401).json({error: "Unauthorized"});
        return
    }

    let fileName = req.body.fileName
    let data = req.body.data

    if (!fileName || !data){
        res.status(402).json({error: "Invalid Body"});
        return
    }

    res.json({message: "done", data: {completed: true}});
})

app.listen(3000)