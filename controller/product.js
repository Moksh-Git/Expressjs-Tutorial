import fs from "fs";
import mongoose from "mongoose";
import { Product } from '../model/product.js';

export const createProduct =async (req, res) => {
    try{
        const product = new Product(req.body);
        const savedData = await product.save()
        res.status(201).json(savedData)
    }  catch(err){
        res.status(400).json({error: err.message})
    }
}

export const getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}
export const getProduct = async (req, res) => {
    console.log(req.params.id)
    const id = req.params.id
    const products = await Product.findById(id)
    res.json(products)
}
export const replaceProduct = async (req, res) => {
    const id = req.params.id
    try{
        const doc = await Product.findOneAndReplace({_id:id},req.body)
        res.status(201).json(doc)
    }catch(err){
        console.log(err)
    }
}
export const updateProduct = async (req, res) => {
    const id = req.params.id
    try{
        const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(doc)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}
export const deleteProduct = async (req, res) => {
    const id = req.params.id
    try{
        const doc = await Product.findOneAndDelete({_id:id})
        res.status(201).json(doc)
    }
    catch(err){
        res.status(400).json(err)
    }
}