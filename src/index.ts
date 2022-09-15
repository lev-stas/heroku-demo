import express, {Request, Response} from "express";

const app = express()

const port = process.env.PORT || 3000

let videos = [
    "The Shawshank Redemption",
    " The Godfather",
    " The Dark Knight",
    " The Godfather Part II",
    " 12 Angry Men",
    " Schindler's List",
    " The Lord of the Rings: The Return of the King",
    " Pulp Fiction",
    " The Lord of the Rings: The Fellowship of the Ring",
    " The Good, the Bad and the Ugly"
]

app.get ('/', (req:Request, res:Response) => {
    res.send ("It Would Be Great to Get a Welcome Drink Here!")
})
app.get ('/videos', (req:Request, res:Response) => {
    res.send (`${videos}`)
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})
