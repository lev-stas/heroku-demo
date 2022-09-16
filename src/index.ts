import express, {Request, Response} from "express";
import bodyParser from "body-parser";

const app = express()

const port = process.env.PORT || 3000

let products = [{id: 1, title: "tomato"}, {id: 2, title: "orange"}]
let addresses = [{id: 1, value: "Nevsky 57"}, {id: 2, value: "Katernikov 5"}]

const parser = bodyParser();
app.use(parser)

app.get ('/', (req:Request, res:Response) => {
    res.send ("It Would Be Great to Get a Welcome Drink Here!")
})

app.get ('/products', (req:Request, res:Response) => {
    if (req.query.title){
        let searchString = req.query.title.toString()
        res.send(products.filter(item => item.title.indexOf(searchString) > -1))
    } else {
        res.send (products)
    }

})

app.post ('/products', (req:Request, res:Response) =>{
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    }
    products.push(newProduct)
    res.status(201).send(newProduct)
})

app.delete ('/products/:id', (req:Request, res:Response) =>{
    products = products.filter(item => item.id !== +req.params.id)
    res.send(202)
})

app.get ('/products/:id', (req:Request, res:Response) =>{
    let product = products.find(p => p.id === +req.params.id)
    if (product){
        res.send(product)
    } else {
        res.send(404)
    }
})

app.put ('/products/:id', (req:Request, res:Response) =>{
    let product = products.find(p => p.id === +req.params.id)
    if (product){
        product.title = req.body.title
        res.send(product)
    } else {
        res.send(404)
    }
})

app.get ('/addresses', (req: Request, res:Response) => {
    res.send(addresses)
})
app.get ('/addresses/:id', (req:Request, res:Response) => {
    let address = addresses.find (item => item.id === +req.params.id)
    if (address){
        res.send(address)
    } else {
        res.send(404)
    }
})

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})
