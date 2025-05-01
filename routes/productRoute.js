import express from 'express';
import { deleteProduct, getProducts, saveProducts } from '../controllers/productContoller.js';
const productRoute = express.Router();
productRoute.get('/', getProducts);
productRoute.post('/', saveProducts);
productRoute.delete('/:productId',deleteProduct);
export default productRoute;