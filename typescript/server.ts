import express, { Express, Request, Response } from 'express';
import axios from 'axios'

const app:Express = express();


app.get("/" , async (req: Request , res: Response) => {
    let list:any = []
    for(let i = 0 ; i<=1000; i++ ){
        const response:any = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=010b85a5594b639d99d3ea642bd45c74&language=en-US&sort_by=original_title.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
        list.push(response.data)
    }

    res.json(list)
})

app.listen(8000)