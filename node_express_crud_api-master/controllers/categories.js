import { v4 as uuid } from 'uuid';
import fs from 'fs';

let categories = [];

try {
    if (fs.existsSync('category-data.json')) {
        //file exists
        categories = fs.readFileSync('category-data.json')
    }
} catch (err) {
    console.error(err)
}

export const getCategories = (req, res) => {
    console.log(`Categories in the database: ${categories}`);

    res.send(categories);
}

export const createCategory = (req, res) => {
    const category = req.body;

    categories.push({ ...category, id: uuid() });

    fs.writeFileSync('category-data.json', categories);
    console.log(`Category [${category.username}] added to the database.`);
};

export const getCategory = (req, res) => {
    if(req.params.categoryID && categories!==undefined && categories.length!==undefined)
    {
        categories.map(e=>{
            if(e.id===req.params.categoryID)
            {
                res.send(e)
            }
        })
    }
};

export const deleteCategory = (req, res) => {
    console.log(`Category with id ${req.params.id} has been deleted`);

    fs.writeFileSync('category-data.json', categories);
    categories = categories.filter((category) => category.id !== req.params.id);
};

export const updateCategory = (req, res) => {
    const category = categories.find((category) => category.id === req.params.id);

    category.name = req.body.name;
    category.desc = req.body.desc;
    category.child_categories = req.body.child_categories;

    fs.writeFileSync('category-data.json', categories);
    console.log(`Category has been updated to ${req.body.name}.age has been updated to ${req.body.desc}`)
};