import fs from "fs";
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
export const createProduct =(req, res) => {
    console.log(req.body)
    data.push(req.body)
    res.send({response:'data pushed'})
}
export const getAllProducts = (req, res) => {
    res.json(data)
}
export const getProduct = (req, res) => {
    console.log(req.params.id)
    const id = +req.params.id
    const product = data.filter((item)=>item.id==id)
    res.json(product)
}
export const replaceProduct = (req, res) => {
    const id = +req.params.id
    const productidx = data.filter((item)=>item.id==id)
    data.splice(productidx,1,{...req.body, id:id})
    res.send({Product:'Updated'})
}
export const updateProduct = (req, res) => {
    const id = +req.params.id
    const productidx = data.filter((item)=>item.id==id)
    const product = data[productidx]
    data.splice(productidx,1,{...product,...req.body})
    res.send({Product:'Patch Updated'})
}
export const deleteProduct = (req, res) => {
    const id = +req.params.id
    const productidx = data.filter((item)=>item.id===id)
    data.splice(productidx,1)
    res.send({type:'DELETE'})
}