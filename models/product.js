import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  name:{
    type: String,
    required: true,
  },
  altName:[
    {type:String}

  ],
  description:{
    type: String,
    required: true,
  },
  Image:{
    type: String,
    required: true,
  },
  labeledprice:{
    type: Number,
    required: true,
  },
    price:{
        type: Number,
        required: true,
    },
    stock:{
        type: Number,
        required: true,
    },
    isAvilable:{
        type: Boolean,
        required: true,
        default: true,
    },
})

const Product = mongoose.model("products", productSchema)
export default Product;