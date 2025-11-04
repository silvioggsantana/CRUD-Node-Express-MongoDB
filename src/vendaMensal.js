import mongoose from "mongoose";

const vendaMensaSchema = new mongoose.Schema({
    mes: Number,
    valorVendido: Number
})

export default mongoose.model("VendaMensal" , vendaMensaSchema) 