import express from 'express';

import { getCategories, createCategory, getCategory, deleteCategory, updateCategory } from '../controllers/categories.js';

const router = express.Router();

router.get('/', getCategories);

router.post('/', createCategory);

router.get('/:id', getCategory);

router.delete('/:id', deleteCategory);

router.patch('/:id', updateCategory);

export default router;