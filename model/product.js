import mongoose from 'mongoose';
const { Schema } = mongoose;

const produtSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    price: {type:Number, min:[0,"wrong price"], required: true},
    discountPercentage: {type:Number, min:[0,"minimum discount 0 allowed"], max:[50,"maximum discount 50 allowed"]},
    rating: {type:Number, min:[0,"minimum rating 0 allowed"], max:[5,"maximum rating 5 allowed"]},
    brand: {type: String, required: true},
    category: {type: String, required: true},
    thumbnail: {type: String, required: true},
    images: [String],
})

export const Product = mongoose.model('Product', produtSchema);
