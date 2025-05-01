import Product from "../models/product.js";
import { isAdmin } from "./userController.js";

export async function getProducts(req, res) {
   
    try{
        if(isAdmin(req)){
            const products = await Product.find();
            res.json(products)
           
        }
        else{
            const products = await Product.find({isAvilable:true});
            res.json(products)
        }

    }catch(err){
        res.json({
            message:"error getting products",
            error:err
        })
    }
}
export function saveProducts(req, res) {
   if(!isAdmin(req)){
        res.status(403).json({
            message:'you are not authorized to create a product',
        })
        return
    }
    const product = new Product(
        req.body
    );
    product.save().then(() => {
        res.json({ message: "product added" });
    }).catch(() => {
        res.json({ message: "product not added" });
    });
}
export async function deleteProduct(req,res){
    if(!isAdmin(req)){
        res.status(403).json({
            message:'you are not authorized to delete a product',
        })
        return
    }
    try{
        await Product.deleteOne({productId:req.params.productId})
        res.json({
            message:"product deleted successfully"
        })
    }catch(err){
        res.status(500).json({
            message:"error deleting product",
            error:err
        })
    }
}