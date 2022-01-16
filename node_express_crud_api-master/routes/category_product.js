import express from 'express';

import { getCategoryProduct, getProductCategory } from '../controllers/category_product.js';

const router = express.Router();

router.get('/:productID', getProductCategory);
router.get('/:categoryID', getCategoryProduct);


export default router;
