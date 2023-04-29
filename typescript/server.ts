import express, { Express, Request, Response } from 'express';
import axios from 'axios'

const app:Express = express();


app.get("/" , async (req: Request , res: Response) => {
    let list:any = []
    for(let i = 0 ; i<=1000; i++ ){
        const response:any = await axios.get("")
        list.push(response.data)
    }

    res.json(list)
})

app.listen(8000)