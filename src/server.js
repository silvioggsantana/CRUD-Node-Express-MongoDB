import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import VendaMensal from "./vendaMensal.js"

dotenv.config()

const MONGO_URI = process.env.MONGO_URI

const app = express()
const port = 3000; 

app.use(express.json());

const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URI)
        console.log("conectado ao mongoDB")
    }catch(e){
        console.log(e)
    }
}

connectDB()

app.post("/vendas" , async (req,res) => {
    try{
        const novaVendamensal = await VendaMensal.create(req.body)
        res.json(novaVendamensal)
    }catch(e){
        console.log(e)
        res.json({error: e})
    }
})

app.get("/vendas" , async (req,res) => {
    try{
        const vendasMensais = await VendaMensal.find()
        res.json(vendasMensais)
    }catch(e){
        console.log(e)
        res.json({error: e})
    }
})

app.put("/vendas/:id" , async (req,res) => {
    try{
        const id = req.params.id
        const atualizarVendasMensais = await VendaMensal.findByIdAndUpdate(
            id,
            req.body,
            {new : true}
        )
        res.json(atualizarVendasMensais)
    }catch(e){
        console.log(e)
        res.json({error: e})
    }
})

app.delete("/vendas/:id" , async (req,res) => {
    try{
        const id = req.params.id
        const vendaExcluída = await VendaMensal.findByIdAndDelete(
            id,
            req.body
        )
        res.json(vendaExcluída)
    }catch(e){
        console.log(e)
        res.json({error: e})
    }
})

app.listen(port, () => console.log("o servidor está ouvindo na porta ", port))